import { useState } from "react";
import '../styles/crypto.css';
import { useCollapse } from 'react-collapsed'
import dropdownarrow from '../Assets/dropdownarrow.svg'
interface ContentItem {
  id: number;
  answer?: string;
  header?: string;
}

interface DropDownBoxProps {
  headerText: string;
  contentItems: ContentItem[];
}

const DropDownBox: React.FC<DropDownBoxProps> = ({ headerText, contentItems }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse();

  return (
    <div className={`dropdown ${isExpanded ? 'open' : ''}`}>
      <div className="dropdown-header" {...getToggleProps({
        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
      })}>
        {headerText}
        
        <span className={`arrow ${isExpanded ? 'up' : 'down'}`}>&#9660;</span>
      </div>
      {isExpanded && (
        <div {...getCollapseProps()}>
          <div className="dropdown-content">
            {contentItems.map(item => (
              <div key={item.id}>
                {item.header && <h3>{item.header}</h3>}
                {item.answer && <p>{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownBox;

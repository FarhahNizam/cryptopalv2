import React from "react";
import NavBar from "../Components/Navigationbar";
import DropDownBox from "../Components/DropDownBox";
import '../styles/crypto.css';

const Help = () => {
  const contentItems = [
    {
      id: 1,
      answer: "Answer 1",
    },
    {
      id: 2,
      answer: "Answer 2",
    },
    {
      id: 3,
      answer: "Answer 3",
    },
    {
      id: 4,
      answer: "Answer 4",
    },
  ];

  const headertext = [
    {
      id: 1,
      header: 'Question 1'
    },
    {
      id: 2,
      header: 'Question 2'
    },
    {
      id: 3,
      header: 'Question 3'
    },
    {
      id: 4,
      header: 'Question 4'
    },
  ];

  const dropDownItems = headertext.map((item, index) => ({
    headerText: item.header,
    contentItems: [contentItems[index]],
  }));

  return (
    <div>
      <NavBar />
      <div className="coindetails-page">
<span className="coindetails-page-title">Frequently Asked Questions</span>
        </div>
      <div className="help-container">
        {dropDownItems.map((item) => (
          <DropDownBox
            key={item.headerText}
            headerText={item.headerText}
            contentItems={item.contentItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Help;

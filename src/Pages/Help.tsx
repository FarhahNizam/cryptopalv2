import React from "react";
import NavBar from "../Components/Navigationbar";
import DropDownBox from "../Components/DropDownBox";
import '../styles/crypto.css';
import Navigbar from "../Components/Navigbar";
import Footer from "../Components/Footer";

const Help = () => {
  const contentItems = [
    {
      id: 1,
      answer: "Discover the world of cryptocurrencies with ease! Our user-friendly hub is tailor-made for beginners. With a simple interface and clear explanations, young adults aged 18-29 can confidently explore and understand the basics of cryptocurrencies.",
    },
    {
      id: 2,
      answer: "We source our live market data from the Crypto Compare API, a reputable and widely used cryptocurrency data provider. By leveraging this API, we ensure that the market data presented on our platform is accurate, up-to-date, and reliable. ",
    },
    {
      id: 3,
      answer: "Our cryptocurrency information hub features a currency converter. With this tool, you can easily convert cryptocurrency values to traditional currencies, allowing you to understand the monetary implications of different cryptocurrencies.",
    },
    {
      id: 4,
      answer: "Our team actively monitors the cryptocurrency landscape and adds new cryptocurrencies as they emerge and gain prominence. We ensure that our users can access a comprehensive list of existing cryptocurrencies, enabling them to explore more options. ",
    },
    {
      id: 5,
      answer: "Absolutely! We understand the importance of accessibility and convenience. Our cryptocurrency information hub is available as a website and a mobile app. The website is the primary platform, offering a comprehensive and immersive experience.",
    },
  ];

  const headertext = [
    {
      id: 1,
      header: 'What makes your cryptocurrency information hub suitable for beginners?'
    },
    {
      id: 2,
      header: 'How reliable is the live market data on your platform?'
    },
    {
      id: 3,
      header: 'Can I convert cryptocurrency values to traditional currencies on your platform? '
    },
    {
      id: 4,
      header: 'How frequently is your platform updated with new cryptocurrencies?'
    },
    {
      id: 5,
      header: 'Can I access your cryptocurrency information hub on both a website and a mobile app?'
    },

  ];

  const dropDownItems = headertext.map((item, index) => ({
    headerText: item.header,
    contentItems: [contentItems[index]],
  }));

  return (
    <div>
      <Navigbar/>
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
      <Footer />
    </div>
  );
};

export default Help;

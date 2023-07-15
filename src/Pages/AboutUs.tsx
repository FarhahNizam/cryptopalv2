import React from "react";
import NavBar from "../Components/Navigationbar";
import Footer from "../Components/Footer";
import FarhahPic from "../Assets/FarhahVG.png";
import BegaPic from "../Assets/BegaVG.png";
import PremPic from "../Assets/PremVG.png";
import IkmalPic from "../Assets/IkmalVG.png";
import linkedinLogo from "../Assets/linkedin.png";

const team = [
  {
    name: "Farhah",
    position: "Front-end Developer",
    avatar: FarhahPic,
    desc1: "Front-end Developer here!",
    desc2: "I love Coding.",
    linkedin: "https://www.linkedin.com/in/farhah-nizam/",
  },
  {
    name: "Lubega",
    position: "API Engineer",
    avatar: BegaPic,
    desc1: "Front-end Developer here!",
    desc2: "I love Coding.",
    linkedin: "https://www.linkedin.com/in/muhammad-lubega/",
  },
  {
    name: "Prem",
    position: "Web Designer",
    avatar: PremPic,
    desc1: "Front-end Developer here!",
    desc2: "I love Coding.",
    linkedin: "https://www.linkedin.com/in/prem-koomar-a9920a226/",
  },
  {
    name: "Ikmal",
    position: "Technical Support",
    avatar: IkmalPic,
    desc1: "Front-end Developer here!",
    desc2: "I love Coding.",
    linkedin: "https://www.linkedin.com/in/ikmal-fadhil-86133b19a/",
  },
];

const AboutUs: React.FC = () => {
  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: "#F9FAFD" }}>
        <div className="AboutPage">
          <div className="about-page" style={{ width: "47%" }}>
            <span
              className="landing-page-title"
              style={{ paddingBottom: "20px" }}
            >
              Who are we
            </span>
            <span className="landing-page-paragraph">
              Join us today for a smooth cryptocurrency journey. With our
              minimalist UI, live market data, and currency converter, make
              informed decisions effortlessly.
            </span>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#F9FAFD" }}>
        <div className="team-section">
          <div style={{ color: "white", fontSize: 50 }}>
            <div className="grid-container">
              {team.map((item) => (
                <div className="grid-item">
                  <div className="team-card">
                    <div className="team-card-inner">
                      <div className="team-card-front">
                        <img
                          className="team-card-front-image"
                          src={item.avatar}
                          alt="BigCo Inc. logo"
                        />
                        <h1 className="team-member">{item.name}</h1>
                        <p className="team-position">{item.position}</p>
                      </div>
                      <div className="team-card-back">
                        <span className="team-info">
                          <p>{item.desc1}</p>
                          <p>{item.desc2}</p>
                          <a href={item.linkedin}>
                            sini
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ backgroundColor: "#F9FAFD" }}>
        <div className="team-section">
          <div style={{ color: "white", fontSize: 50 }}>
            
            <div className="grid-container">
              <div className="grid-item">
                <div className="team-card">
                  <div className="team-card-inner">
                    <div className="team-card-front">
                      <img
                        className="team-card-front-image"
                        src={FarhahPic}
                        alt="BigCo Inc. logo"
                      />
                      <h1 className="team-member">Akmal</h1>
                      <p className="team-position">Front-end Developer</p>
                    </div>
                    <div className="team-card-back">
                      <span className="team-info">
                        <p>Front-end Developer here!</p>
                        <p>I love coding</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="team-card">
                  <div className="team-card-inner">
                    <div className="team-card-front">
                      <img
                        className="team-card-front-image"
                        src={FarhahPic}
                        alt="BigCo Inc. logo"
                      />
                      <h1 className="team-member">Akmal</h1>
                      <p className="team-position">Front-end Developer</p>
                    </div>
                    <div className="team-card-back">
                      <span className="team-info">
                        <p>Front-end Developer here!</p>
                        <p>I love coding</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="team-card">
                  <div className="team-card-inner">
                    <div className="team-card-front">
                      <img
                        className="team-card-front-image"
                        src={FarhahPic}
                        alt="BigCo Inc. logo"
                      />
                      <h1 className="team-member">Akmal</h1>
                      <p className="team-position">Front-end Developer</p>
                    </div>
                    <div className="team-card-back">
                      <span className="team-info">
                        <p>Front-end Developer here!</p>
                        <p>I love coding</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="team-card">
                  <div className="team-card-inner">
                    <div className="team-card-front">
                      <img
                        className="team-card-front-image"
                        src={FarhahPic}
                        alt="BigCo Inc. logo"
                      />
                      <h1 className="team-member">Akmal</h1>
                      <p className="team-position">Front-end Developer</p>
                    </div>
                    <div className="team-card-back">
                      <span className="team-info">
                        <p>Front-end Developer here!</p>
                        <p>I love coding</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />;
    </>
  );
};

export default AboutUs;

import React from "react";
import NavBar from "../Components/Navigationbar";
import Footer from "../Components/Footer";
import FarhahPic from "../Assets/FarhahVG.png";
import AkmalPic from "../Assets/Akmal.png";
import NornaPic from "../Assets/Norna.png";
import JohananPic from "../Assets/Joe.png";
import Pink_circle from "../Assets/Pink-circle.svg";
import linkedinLogo from "../Assets/linkedin.png";
import { Padding } from "@mui/icons-material";

const team = [
  {
    name: "Farhah",
    position: "Product Designer",
    avatar: FarhahPic,
    desc1: "I design intuitive and visually appealing user interfaces.",
    linkedin: "https://www.linkedin.com/in/farhah-nizam/",
  },
  {
    name: "Akmal",
    position: "Front-end Developer",
    avatar: AkmalPic,
    desc1: "I create seamless user experiences across platforms.",
    linkedin: "https://www.linkedin.com/in/mohamad-akmal-bin-82b5731b7/",
  },
  {
    name: "Norna",
    position: "Mobile Developer",
    avatar: NornaPic,
    desc1: "I develop top-notch mobile apps for Android.",
    linkedin: "https://www.linkedin.com/in/nornaleyda-rosli-866269261/",
  },
  {
    name: "Johanan",
    position: "Quality Assurance",
    avatar: JohananPic,
    desc1: "I am committed to delivering top-quality software products.",
    linkedin: "https://www.linkedin.com/in/johanansamuel/",
  },
];

const AboutUs: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="about-page-container">
        <div className="about-ilustration">
          <div className="about-copywriting">
            <span className="landing-page-title">Who are we</span>
            <span className="landing-page-paragraph">
            Discover the fascinating world of digital currencies with CryptoPal.
            Our platform, on web and mobile,
            makes crypto accessible and exciting for eager learners like you.
            </span>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#F9FAFD" }}>
        <h1 className="team-section-header">Meet the team !</h1>
        <div className="team-section">
          <img
            className="ring-background"
            src={Pink_circle}
            alt="BigCo Inc. logo"
          />
          <div className="team-profile">
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
                          <a href={item.linkedin}>
                            <img
                              className="linkedinLogo"
                              src={linkedinLogo}
                              width={40}
                              height={40}
                              alt="Linkedin"
                            />
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
      {/* </div> */}
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
      <Footer />
    </>
  );
};

export default AboutUs;

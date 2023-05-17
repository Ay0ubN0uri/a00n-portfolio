import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "Python",
    numberPercent: "96",
    startCount: "0",
    endCount: "96",
  },
  {
    name: "C/CPP",
    numberPercent: "93",
    startCount: "0",
    endCount: "93",
  },
  {
    name: "Malware Analysis",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "Web Scraping",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "MERN Stack",
    numberPercent: "88",
    startCount: "0",
    endCount: "88",
  },
  {
    name: "Php/Laravel",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
  },
  {
    name: "Web3",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
  },
  {
    name: "Java/JavaFX",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
  },
  {
    name: "PowerShell",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
  },
  {
    name: "C#",
    numberPercent: "80",
    startCount: "0",
    endCount: "80",
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;

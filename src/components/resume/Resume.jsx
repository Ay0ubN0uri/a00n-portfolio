import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Application web mobile des articles de la mode et vente aux enchères`,
    jobType: `Google | Remote`,
    jobDuration: `Apr-Jul 2022`,
    timeDuraton: `3 months`,
    compnayName: "  INTELLCAP SARL",
    jobDescription: `Realization of an e-commerce platform for fashion items using wordpress development.`,
  },
  {
    jobPosition: `Système de gestion des étudiants Site Web & Application Mobile`,
    jobType: `Ridian | Remote`,
    jobDuration: `Apr-Jul 2022`,
    timeDuraton: `3 months`,
    compnayName: "Ecole supérieure de technologie de Beni Mellal",
    jobDescription: `Development of a school management application using the Odoo ERP solution for the desktop version and Ionic for the mobile version. This application allows you to manage student registrations, timetables, grades, absences as well as the management of teachers and administrative staff.`,
  },
  {
    jobPosition: `E-commerce website`,
    jobType: `Est Essaouira`,
    jobDuration: `Jul-Aug 2021`,
    timeDuraton: `2 months`,
    compnayName: "Ecole supérieure de technologie d'Essaouira",
    jobDescription: ` Built an e-commerce platform using JEE, delivering a seamless user experience. Implemented essential features like product management, shopping cart functionality and secure payment processing.
    Leveraged JEE's capabilities for scalability and integration, ensuring reliable performance and customer satisfaction.`,
  },
];

const educatonContent = [
  {
    passingYear: "2022-2025",
    degreeTitle: "computer engineering and emerging technologies",
    instituteName: " Ecole Nationale des sciences appliquées d'El Jadida",
  },
  {
    passingYear: "2020-2022",
    degreeTitle: "DUT in computer engineering",
    instituteName: "Ecole supérieure de technologie de BENI MELLAL",
  },
  {
    passingYear: "2019-2020",
    degreeTitle: "Bachelor of Physical Sciences ",
    instituteName: "Oum Romman High School",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      {/* <label>{val.jobType}</label> */}
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Mobile Development",
    descriptions: `Deliver high-quality, cross-platform solutions that offer seamless user experiences. From design to deployment.`,
  },
  {
    icon: "icon-desktop",
    title: "Web Development",
    descriptions: `Leveraging the latest web technologies and frameworks and ensure a responsive and highly functional websites that engage users.`,
  },
  {
    icon: "icon-target",
    title: "Bug Hunting",
    descriptions: `Identifying and resolving vulnerabilities in software systems and provide comprehensive reports for improved security.`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}

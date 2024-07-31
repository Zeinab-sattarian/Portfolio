import React, { useState } from "react";

/**
 *
 * Projects Column from the Work section. Only for mobile
 *
 * @param {Array} projects - All the projects person has done. It has 6 attributes: backgroundColor for background color of the bubble. Type for type of the projects. Title and subtitle of the project. Techs the technologies projects has used. Links is a json with 2 attributes github and website.
 * 
 *
 */
function ProjectsColumn() {
  const [texts] = useState({
    projects: [
      {
        backgroundColor: `#FFC9CD`,
        type: `Bachelore's Thesis`,
        title: `<strong>Volunteer Dental Appointment System</strong>`,
        subtitle:
          "Created a web-based platform to simplify appointment scheduling and gather feedback for volunteer dentists. Through comprehensive literature reviews, I explored existing appointment systems and technological advancements. My work led to improved patient satisfaction and extended charitable services to remote regions",
        techs: "Reactjs Django Docker CSS HTML",
        
      },
      {
        backgroundColor: `#dfe6e940`,
        type: `Website`,
        title: `<strong>Nura Online Bank</strong>`,
        subtitle:
          "developed a real-time transaction processing system that ensures immediate updates to account balances. Additionally, designed features to display transaction history, created analytical tools for monthly expense reviews, and improved the user experience through intuitive UI/UX design principles",
       
        
      },
      
      {
        backgroundColor: `#CCFAED`,
        type: `System`,
        title: `<strong>Facial Recognition</strong>`,
        subtitle:
          "developed a real-time facial recognition system to record employee attendance using computer vision models, resulting in a 30% accuracy improvement. Additionally, I enhanced data reporting by organizing and cleaning the database, leading to more accurate monthly reports.",
        techs: "Python PowerBI SQL",
      
      },
      {
        backgroundColor: `#D5EAFF`,
        type: `Dashboard`,
        title: `<strong>Weather & Flight Delay Prediction</strong>`,
        subtitle:
          "In my weather prediction project, ML was used to enhance the accuracy of weather forecasting models. By identifying patterns in historical weather data, my ML models predicted weather events with remarkable precision. Leveraging Microsoft Power BI, I created interactive dashboards to showcase weather trends. Similarly, in the flight delay prediction project, by leveraging historical flight data and relevant features, ML algorithms enabled accurate predictions.",
        techs: "PowerBI SQL Python ",
        
      },
    ],
  });

  /// Returns the items from the projects array.
  return (
    <>
      <div className="column">
        {texts.projects.map((item, i) => {
          return (
            <div
              className="item"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <h1
                dangerouslySetInnerHTML={{
                  __html: item.type,
                }}
              ></h1>
              <h2
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              ></h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.subtitle,
                }}
              ></p>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.techs,
                }}
              ></span>
              
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
        }
        h1 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          margin-bottom: 5px;
        }
        h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 25px;
        }

        p {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 20px;
          color: #61616a;
          margin-bottom: 25px;
        }
        .item {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 4vw;
          border-radius: 2vw;
          margin-bottom: 25px;
        }
        .item .row-of-logos {
          display: flex;
          flex-direction: row;
          margin-top: 25px;
        }
        .item .row-of-logos img {
          width: 40px;
          height: 25px;
          object-fit: contain;
        }
      `}</style>
    </>
  );
}

export default ProjectsColumn;

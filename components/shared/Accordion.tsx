import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

/**
 *
 * 
 *
 * @param {Array} questions - 
 *
 */

export default function SimpleAccordion() {
  const [questions] = useState({
    questions: [
      {
        questionTitle: "Internship at Shahid Bahonar Copper Industries Co., ",
        questionDescription:
          'Worked on machine learning, computer vision, collaborative information visualization, front-end development, and data cleaning and processing.',
      },
      {
        questionTitle: "Scrum Master and Project Manager ",
        questionDescription:
          'Led a team of 4 students using Agile and Scrum frameworks, enhancing project management and collaboration, improving productivity with regular stand-ups and tools like Jira, and ensuring timely delivery of high-quality project increments.',
      },
      {
        questionTitle: "Teaching Assistant ",
        questionDescription:
          'Enhanced student learning by assisting in teaching Systems Analysis and Design and Advanced Computer Concepts II, creating presentations and training materials for over 70 students, designing and grading assignments and projects to ensure fair assessment, and improving teaching methods by 50% through recording and acting on student feedback.',
      },
      
    ],
  });

  return (
    <>
      <div className="accordion-style">
        {questions.questions.map((i) => {
          return (
            <Accordion
              elevation={0}
              sx={{
                backgroundColor: "#00FFFF",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#2d3436" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "#2d3436",
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "122%",
                    fontFamily: "Visby",
                  }}
                >
                  {i.questionTitle}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#2d3436",
                    fontSize: "16px",
                    lineHeight: "122%",
                    fontFamily: "Visby",
                  }}
                >
                  {i.questionDescription}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <style jsx>
        {`
          .accordion-style {
            padding-top: 5vw;
          }
        `}
      </style>
    </>
  );
}

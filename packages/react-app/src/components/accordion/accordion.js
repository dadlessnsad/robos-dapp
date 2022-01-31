import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordion.css";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion-page">
      <div className="accordion">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "100%", flexShrink: 20 }}
              className="questions"
            >
              When will Robos be available to mint?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              A: TBD (end of Feb/Early March)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              className="questions"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              What is the mint price of Robos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              TBD
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="questions"
            >
              How many Robos are available to mint?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              5000 Genesis and 2,500 Jr's are able to be manufactured.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="questions"
            >
              What are $Bolts?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              $Bolts are Robos utility token that gives you the ability to Name your Robo, Write his story, manufacture a JR, Vote on the Snapshot DAO, and much more (to be announced)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="questions"
            >
              How do I stay up to date on all things Robos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              Via our Discord server and social media pages.<br />
              <a className="links" href='https://twitter.com/RobosDAO'>Twitter</a><br />
              <a className="links" href='https://www.instagram.com/robosdao'>Instagram</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="questions"
            >
              If you have any other questions or concerns email XXXXXXX@XXxxx.COM and the team will get back to you as soon as possible.
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
            
            </Typography>
          </AccordionDetails>
        </Accordion>
       </div>
    </div>
  );
}

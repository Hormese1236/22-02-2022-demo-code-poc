import React from "react";
import styled from "styled-components";
import agendaData from "../../pages/api/MockData/agendaData";
 import DayView from "../DayView/DayView";


const DayViewConatiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #a7a8aa;
  background-color: white;
  justify-content: space-between;
  margin: 2rem 2rem 0 2rem;
  padding: 1rem;
  ul {
    padding-left:0;
  }
`;

const MainTitle = styled.div`
  font-style: normal;
  font-size: 1.5rem;
  line-height: 1.625rem;
  font-weight: bold;
  width: 100%;

  padding-bottom: 2rem;
  border-bottom: 5px solid;
  border-bottom-color: rgb(212, 102, 6);
`;

const Agenda = () => {
  const getTime = (startTime, endTime) => {
    return `${new Date(startTime).toLocaleTimeString("en-US")} -
     ${new Date(endTime).toLocaleTimeString("en-US")}
    `;
  };

  return (
    <DayViewConatiner>
      <MainTitle>Schedule</MainTitle>
      {agendaData.map((agenda, index) => {
        return (
          <DayView
            key={index}
            subject={agenda.subject}
            time={getTime(agenda.start.dateTime, agenda.end.dateTime)}
          />
        );
      })}
    </DayViewConatiner>
  );
};

export default Agenda;

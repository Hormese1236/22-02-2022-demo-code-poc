import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ScheduleCard from "../ScheduleCard/ScheduleCard";
import ScheduleDate from "../ScheduleDate/ScheduleDate";
import { getCalenderEvents } from "../../pages/api/graph";

const { loginRequest } = require("../../utils/authConfig");

const ScheduleViewConatiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #a7a8aa;
  background-color: white;
  justify-content: space-between;
  margin: 2rem 2rem 0 2rem;
  padding: 1rem;
  ul {
    padding-left: 0;
  }
`;

const MainTitle = styled.div`
  font-style: normal;
  font-size: 1.5rem;
  line-height: 1.625rem;
  font-weight: bold;
  width: 100%;
  color: #0d3f5e;
  margin-bottom: 1rem;
`;

const TitleSeperator = styled.div`
  width: 100%;
  color: #0d3f5e;
  border-bottom: 5px solid;
  border-bottom-color: rgb(212, 102, 6);
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Schedule = (props) => {
  const { instance, account } = props;
  const [scheduleData, setScheduleData] = useState([]);

  const getTime = (startTime, endTime) => {
    return `${new Date(startTime).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })} -
     ${new Date(endTime).toLocaleTimeString("en-US", {
       hour: "2-digit",
       minute: "2-digit",
     })}
    `;
  };

  const getEvents = () => {
    const request = {
      ...loginRequest,
      account: account,
    };
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        getCalenderEvents(response.accessToken).then((response) => {
          setScheduleData(response.value);
        });
      })
      .catch((e) => {
        console.log("Error");
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <ScheduleViewConatiner>
      <MainTitle>Schedule</MainTitle>
      <ScheduleDate />
      <TitleSeperator />

      {scheduleData ? (
        scheduleData.map((agenda, index) => {
          return (
            <ScheduleCard
              key={index}
              subject={agenda.subject}
              time={getTime(agenda.start.dateTime, agenda.end.dateTime)}
            />
          );
        })
      ) : (
        <>No data found</>
      )}
    </ScheduleViewConatiner>
  );
};

export default Schedule;

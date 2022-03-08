import React, { useEffect, useState } from "react";
import styled from "styled-components";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import dateFormat, { masks } from "dateformat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import ScheduleCard from "../ScheduleCard/ScheduleCard";
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

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  background: transparent;
`;

const Span = styled.span`
  cursor: pointer;
`;

const Schedule = (props) => {
  const { instance, account } = props;
  const [scheduleData, setScheduleData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const renderDate = (date) => {
    const weekday = new Array(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    );
    const months = new Array(
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    );
    const dayOfWeek = weekday[date.getDay()];
    const dayOfMonth =
      date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const curMonth = months[date.getMonth()];
    const curYear = date.getFullYear();
    return `${dayOfWeek}, ${curMonth} ${dayOfMonth}, ${curYear}`;
  };

  const [displayDate, setDisplayDate] = useState(renderDate(currentDate));

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

  const getStartDateTime = () => {
    return dateFormat(
      new Date(currentDate.setHours(0, 0, 0, 0)),
      "isoDateTime"
    );
  };

  const getEndDateTime = () => {
    return dateFormat(
      new Date(currentDate.setHours(23, 59, 59, 999)),
      "isoDateTime"
    );
  };

  const getEvents = () => {
    const request = {
      ...loginRequest,
      account: account,
    };
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        getCalenderEvents(
          response.accessToken,
          getStartDateTime(currentDate),
          getEndDateTime(currentDate)
        ).then((response) => {
          const value = get(response, "value", "");
          if (!isEmpty(value)) {
            setScheduleData(value);
          }
        });
      })
      .catch((e) => {
        console.log("Error");
      });
  };

  const handlePreviousDay = () => {
    const yesterday = new Date(currentDate.setDate(currentDate.getDate() - 1));
    setCurrentDate(yesterday);
    setDisplayDate(renderDate(yesterday));
    getEvents();
  };

  const handleNextDay = () => {
    const tomorrow = new Date(currentDate.setDate(currentDate.getDate() + 1));
    setCurrentDate(tomorrow);
    setDisplayDate(renderDate(tomorrow));
    getEvents();
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <ScheduleViewConatiner>
      <MainTitle>Schedule</MainTitle>
      <DateContainer>
        <Button type="button" onClick={handlePreviousDay}>
          <Span>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Span>
        </Button>
        {displayDate}
        <Button type="button" onClick={handleNextDay}>
          <Span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Span>
        </Button>
      </DateContainer>
      <TitleSeperator />
      {scheduleData.length > 0 ? (
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
        <div>No data found</div>
      )}
    </ScheduleViewConatiner>
  );
};

export default Schedule;

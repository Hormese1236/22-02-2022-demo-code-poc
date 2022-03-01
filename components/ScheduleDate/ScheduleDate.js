import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

const SeeMoreButton = styled.button`
  border: none;
  text-decoration: underline;
  font-style: normal;
  font-weight: 400;
  line-height: 1.37rem;
  font-size: 1rem;
  background: transparent;
  color: #0d3f5e;
  cursor: pointer;
  text-align: left;
  padding-top: 1rem;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: none;
  }
  span {
    margin-left: 0.75rem;
    height: 10px;
    &.up {
      svg {
        transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
      }
    }
  }
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

const ScheduleDate = (props) => {
  // const [currentDate, setCurrentDate] = useState(new Date());

  const renderDate = (currentDate) => {
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
    const dayOfWeek = weekday[currentDate.getDay()];
    const dayOfMonth =
      currentDate.getDate() < 10
        ? `0${currentDate.getDate()}`
        : currentDate.getDate();
    const curMonth = months[currentDate.getMonth()];
    const curYear = currentDate.getFullYear();
    return `${dayOfWeek}, ${curMonth} ${dayOfMonth}, ${curYear}`;
  };

  const handlePreviousDay = () => {
    console.log("left");
  };

  const handleNextDay = () => {
    console.log("right");
  };

  return (
    <DateContainer>
      <Button type="button" onClick={handlePreviousDay}>
        <Span>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Span>
      </Button>
      {renderDate(new Date())}
      <Button type="button" onClick={handleNextDay}>
        <Span>
          <FontAwesomeIcon icon={faChevronRight} />
        </Span>
      </Button>
    </DateContainer>
  );
};

export default ScheduleDate;

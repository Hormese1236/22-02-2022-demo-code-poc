import React from "react";
import styled from "styled-components";

const ScheduleList = styled.div`
  padding: 1.5rem;
  border-bottom: $mid-grey 1px solid;
  border-width: thin;
  display: block;
  width: 100%;
  border-style: solid;
  border-color: rgb(207, 205, 194);
  border-radius: 20px;
  background-color: rgb(209, 227, 230);
  margin: 2px;
`;

const ScheduleTime = styled.div`
  font-size: 1rem;
  width: 100%;
  font-weight: bold;
  white-space: nowrap;
  color: rgb(56, 59, 77);
`;

const ScheduleTitle = styled.div`
  font-size: 0.875rem;
  font-weight: normal;
  color: $screen-black;
  width: auto;
  text-align: left;
  display: inline;
  white-space: nowrap;
`;
const Timeline = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  ul {
    list-style: none;
    margin: 0;
    &:before {
      content: "";
      width: 2px;
      background: rgb(157, 163, 158);
      position: absolute;
      left: 8px;
      height: 100%;
    }
    li {
      position: relative;
      padding-left: 15px;

      &:before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        background: white;
        position: absolute;
        left: 0;
        border: 5px solid #0d3f5e;
        border-radius: 15px;
      }
    }
  }
`;

const ScheduleCard = (props) => {
  const { time, subject, bodyPreview } = props;
  return (
    <Timeline>
      <ul>
        <li>
          <ScheduleList>
            <ScheduleTime>{time} </ScheduleTime>
            <ScheduleTitle>
              <span>{subject}</span>
            </ScheduleTitle>
          </ScheduleList>
        </li>
      </ul>
    </Timeline>
  );
};

export default ScheduleCard;

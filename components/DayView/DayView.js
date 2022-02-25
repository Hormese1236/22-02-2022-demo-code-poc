import React from "react";
import styled from "styled-components";

const DayViewList = styled.div`
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

const DayViewTime = styled.div`
  font-size: 1rem;
  width: 100%;
  font-weight: bold;
  white-space: nowrap;
  color: rgb(56, 59, 77);
`;

const DayViewTitle = styled.div`
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
      left: 3px;
      top: 9px;
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
        background: rgb(157, 163, 158);
        position: absolute;
        left: 0;
        border-radius:15px;
      }
    }
  }
`;

const DayView = (props) => {
  const { time, subject, bodyPreview } = props;
  return (
    <Timeline>
      <ul>
        <li>
          <DayViewList>
            <DayViewTime>{time} </DayViewTime>
            <DayViewTitle>
              <span>{subject}</span>
            </DayViewTitle>
          </DayViewList>
        </li>
      </ul>
    </Timeline>
  );
};

export default DayView;
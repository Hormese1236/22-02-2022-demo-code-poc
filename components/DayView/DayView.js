import React from "react";
import styled from "styled-components";

const DayViewList = styled.div`
  padding: 1.5rem;
  margin-top:1.5rem;
  border-bottom: $mid-grey 1px solid;
 
  display: flex;
  
  
  
`;

const DayViewTime = styled.div`
  font-size: 1rem;
  width: 30%;

  
`;

const DayViewTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: $screen-black;
  width: auto;
  text-align: left;
 background-color: #5F909C;
  display: inline;
  justify-content: flex-start;
  background-color:rgb(82, 166, 179);
  white-space:nowrap;

}

  padding:1rem;
  
`;

const DayViewDescription = styled.div`
  font-size: 0.875rem;
  width: 40%;

  padding:1rem;
 background-color:rgb(82, 166, 179);
`;

const DayViewLink = styled.div`
  font-size: 0.875rem;
  width: 15%;
  text-align: right;
  background-color:rgb(82, 166, 179);
  padding:1rem;
`;

const DayView = (props) => {
  const { time, subject, bodyPreview } = props;
  return (
    <DayViewList>

      <DayViewTime>{time} </DayViewTime>
      <DayViewTitle>
        <span>{subject}</span>
      </DayViewTitle>
      <DayViewDescription>{bodyPreview}</DayViewDescription>
      <DayViewLink>
        <a href="#">Learn More</a>
      </DayViewLink>
    </DayViewList>
  );
};

export default DayView;

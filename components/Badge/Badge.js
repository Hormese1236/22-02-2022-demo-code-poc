import React from "react";
import styled from "styled-components";

const BadgeConatiner = styled.div`
  background-color: #cd4216;
  color: white;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 0.25rem;
  width: 80px;
  padding-left: 1rem;
  font-weight: bold;
`;

const Badge = (props) => {
  const { children } = props;
  return <BadgeConatiner dangerouslySetInnerHTML={{ __html: children }} />;
};

export default Badge;

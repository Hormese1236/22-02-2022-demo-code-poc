import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";

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

const SeeMore = (props) => {
  const { onClick } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const showDescription = () => {
    setIsExpanded(!isExpanded);
    onClick();
  };

  return (
    <SeeMoreButton onClick={showDescription}>
      {isExpanded ? "See Less" : "See More"}
      <span>
        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
      </span>
    </SeeMoreButton>
  );
};

export default SeeMore;

/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import styled from "styled-components";
import ToggleButton from "../ToogleButton/ToogleButton";
import Badge from "../Badge/Badge";
import SeeMore from "../SeeMore/SeeMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { taskUpdate } from "../../pages/api/graph";

const ToDoBaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid #a7a8aa;
  background-color: white;
  padding: 1rem;
  margin: 2rem 2rem 0 2rem;

  mainTitle {
    font-style: normal;
    font-size: 1.5rem;
    line-height: 1.625rem;
    font-weight: bold;
    color: #0d3f5e;
    margin-bottom: 0.625rem;
  }

  ul {
    padding-left: 0;
  }
`;

const DataContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  width:  display:flex;
  width:31.25rem;
  padding: 1rem 0 1.5rem 0;
  border-bottom: 1px solid #e9e9e7;
  margin-right: 1rem;

  toggleButton {
    right: 0;
    font-size: 1rem;
    font-weight: 900;
    padding: 0.75rem;
    margin-right: 1.5rem;
    margin-top: 0.3rem;
    cursor: pointer;
    position: absolute;
  }

  h1 {
    color: #2b2b2b;
    margin-top: 1rem;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  a {
    width: fit-content;
    font-size: 1rem;
    line-height: 1.25rem;
    color: #00728d;
    font-style: normal;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 0.5rem;
    &:hover {
      color: #00728d;
    }
  }
  span {
    width: fit-content;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.3rem;
  }
`;

const GotoLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  a {
    width: fit-content;
    font-size: 1rem;
    color: #00728d;
    text-decoration: underline;
    font-style: normal;
    font-weight: bold;
    line-height: 1.25rem;
  }

  rightArrow {
    font-style: normal;
    font-weight: 900;
    font-size: 1rem;
    line-height: 1rem;
    align-self: center;
    color: #0d3f5e;
    margin-left: 0.5rem;
  }
`;

const Todo = (props) => {
  const { tasks,taskListId,accessToken} = props;
  

  const getTodos = () => {
    return tasks.map((task) => (
      <DataContent key={task.id}>
        <toggleButton>
          <ToggleButton isToggle={task.status === "completed" ? true : false} onToggleChange={()=>taskUpdate(taskListId,task,accessToken)} />
        </toggleButton>
        <h1>{task.title}</h1>
        {task.importance === "high" ? <Badge>{task.importance}</Badge> : <></>}
        <SeeMore isCollapsed />
      </DataContent>
    ));
  };

  return (
    <ToDoBaseContainer>
      <mainTitle>To-Do</mainTitle>
      <ul>{getTodos()}</ul>
      <GotoLinkContainer>
        <a href="/">View All</a>
        <rightArrow>
          <FontAwesomeIcon icon={faArrowRight} />
        </rightArrow>
      </GotoLinkContainer>
    </ToDoBaseContainer>
  );
};

export default Todo;

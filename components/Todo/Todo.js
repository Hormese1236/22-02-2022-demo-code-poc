/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "../ToogleButton/ToogleButton";
import Badge from "../Badge/Badge";
import SeeMore from "../SeeMore/SeeMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { addtask, taskUpdate } from "../../pages/api/graph";
import { render } from "react-dom";
import Form from "../Form";
import { StandardInteractionClient } from "@azure/msal-browser";

const ToDoBaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid #a7a8aa;
  background-color: white;
  padding: 1rem;
  margin: 2rem 2rem 0 2rem;

  ul {
    padding-left: 0;
  }
`;

const MainTitle = styled.div`
  font-style: normal;
  font-size: 1.5rem;
  line-height: 1.625rem;
  font-weight: bold;
  color: #0d3f5e;
  margin-bottom: 0.625rem;
`;

const DataContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  display: flex;
  width: 31.25rem;
  padding: 1rem 0 1.5rem 0;
  border-bottom: 1px solid #e9e9e7;
  margin-right: 1rem;
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
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

const ToggleButtonConatiner = styled.div`
  right: 0;
  font-size: 1rem;
  font-weight: 900;
  padding: 0.75rem;
  margin-right: 1.5rem;
  margin-top: 0.3rem;
  cursor: pointer;
  position: absolute;
`;

const GotoLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 25px;
`;

const ViewAll = styled.span`
  display: flex;
  width: 8rem;
  text-decoration-line: underline;
  color: #00728d;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const AddNewButton = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 20px;
  min-width: 7rem;
  height: 2.5rem;
  line-height: 1rem;
  background-color: #0d3f5e;
  color: #fff;
`;

const DateFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Filter = styled.span`
  display: flex;
  width: 5rem;
  text-decoration-line: underline;
  font-style: normal;

  font-size: bold;
  color: #00728d;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const Todo = (props) => {
  const { tasks, taskListId, accessToken, updateTask } = props;
  const [viewAllTodo, setViewAllTodo] = useState(false);
  const [buttonchange, setbuttononchange] = useState(false);
  // [button ,setbutton]=usestate("true")

  const renderDate = () => {
    const currentDate = new Date();
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
    return `Today - ${curMonth} ${dayOfMonth}, ${curYear}`;
  };
  

  const expandTodo = () => {
    setViewAllTodo((viewAll) => !viewAll);
  };
  const postdata = {
    title: 'A new task',
    linkedResources: [
       {
          webUrl: 'http://microsoft.com',
          applicationName: 'Microsoft',
          displayName: 'Microsoft'
       }
    ]
 };

  const getTodos = () => {
    return tasks.map((task, index) => {
      return (
        (!viewAllTodo ? index < 5 : index <= tasks.length) && (
          <DataContent key={task.id}>
            <ToggleButtonConatiner>
              <ToggleButton
                isToggle={task.status === "completed" ? true : false}
                onToggleChange={() => taskUpdate(taskListId, task, accessToken)}
              />
            </ToggleButtonConatiner>
            <h1>{task.title}</h1>
            {task.importance === "high" ? (
              <Badge>{task.importance}</Badge>
            ) : (
              <></>
            )}
            {task.isExpanded ? (
              <div>
                <p>Task priority: {task.importance}</p>
                <p>Status: {task.status}</p>
                <p>Start date: {task.createdDateTime}</p>
              </div>
            ) : (
              <></>
            )}
            <SeeMore isCollapsed onClick={() => updateTask(task)} />
          </DataContent>
        )
      );
    });
  };
  function addbutton() {
    setbuttononchange(true);
  }

  return (
    <ToDoBaseContainer>
      <MainTitle>To-Do</MainTitle>
      <DateFilterContainer>
        <div>{renderDate()}</div>
        <Filter>
          <FontAwesomeIcon icon={faFilter} />
          Filters
        </Filter>
      </DateFilterContainer>
      <ul>{getTodos()}</ul>
      <GotoLinkContainer>
        <AddNewButton onClick={addbutton}>Add New</AddNewButton>
        {!viewAllTodo && tasks.length > 5 && (
          <ViewAll role="button" onClick={expandTodo}>
            View All
            <FontAwesomeIcon icon={faChevronDown} />
          </ViewAll>
        )}
      </GotoLinkContainer>

      {buttonchange ? <Form  accessToken={accessToken} taskListId={taskListId} postdata={postdata}/> : ""}

    </ToDoBaseContainer>
  );
};

export default Todo;

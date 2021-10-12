import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, SIZES } from "../constants/index";

import { useTask } from "../context/TaskContext";

const TitleNew = styled.div`
  margin: 20px 0;
  text-align: center;
  padding: 0 0 15px 0;
  border-bottom: 1px solid ${COLORS.whiteSoft};

  p {
    font-weight: 500;
    color: ${COLORS.whiteSoft};
  }
`;

const TaskForm = styled.form`
  display: flex;
  text-align: center;
  margin: 20px auto;
  max-width: 500px;
  flex-direction: column;
`;

const InputTask = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  margin: 10px;
  border: 1px solid ${COLORS.whiteSoft};
  height: ${(props) => props.size};
  padding: 5px 15px;
  border-radius: 10px;
  &::placeholder {
    color: ${COLORS.whiteSoft};
  }
`;

const TaskTitle = styled.span`
  font-weight: 500;
`;

const TaskButton = styled.button`
  cursor: pointer;
  margin: 0 auto;
  border: none;
  font-weight: 600;
  color: white;
  background: ${COLORS.blue};
  border-radius: 15px;
  height: 40px;
  width: 150px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonCategory = styled.button`
  margin: 10px;
  padding: 15px;
  height: auto;
  width: auto;
  border: none;
  background-color: #cfecff;
  border-radius: ${SIZES.RadiusBox};

  &:checked {
    border: 2px solid ${COLORS.blue};
  }
`;

const categorys = [
  {
    name: "📙 Education",
  },
  {
    name: "⚽ Sports",
  },
  {
    name: "✏️ Meetings",
  },
  {
    name: "👋️ Friends",
  },
];

const TaskCreator = () => {
  const { push } = useRouter();

  const { createTask } = useTask();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task.title, task.description);
    push("/");
  };

  return (
    <>
      <TitleNew>
        <p>Create task</p>
      </TitleNew>
      <TaskForm onSubmit={handleSubmit} action="">
        <TaskTitle>Task title</TaskTitle>
        <InputTask
          onChange={handleChange}
          type="text"
          size="4em"
          placeholder="Write your title"
          name="title"
        ></InputTask>
        <TaskTitle>Category</TaskTitle>

        <CategoryContainer>
          {categorys.map((category) => (
            <ButtonCategory
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {category.name}
            </ButtonCategory>
          ))}
        </CategoryContainer>

        <InputTask
          onChange={handleChange}
          type="text"
          size="9em"
          placeholder="This is my descrption about my first class"
          name="description"
        ></InputTask>
        <TaskButton>Create task</TaskButton>
      </TaskForm>
    </>
  );
};

export default TaskCreator;

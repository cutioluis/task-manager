import styled from "styled-components";

import { COLORS } from "../constants/index";
import { useTask } from "../context/TaskContext";

import TaskEmpty from "../components/TaskEmpty";

const ContainerTask = styled.article`
  padding: 30px;
  margin: 50px;
  max-width: 350px;
  border-radius: 20px;
  background-color: ${COLORS.blueSoft};
`;

const TaskDescription = styled.div`
  margin-bottom: 15px;
  color: red;
  h3 {
    margin: 5px 0;
    font-weight: 700;
    color: ${COLORS.black};
  }
  P {
    /* 
      max-width: 70%; */
    color: ${COLORS.gray};
  }
`;

const TaskLocation = styled.div`
  color: ${COLORS.blue};
`;

const Divider = styled.div`
  margin: 10px 0;
  height: 1px;
  background: #f2d4ce;
  width: 90%;
`;

const TaskTime = styled.div`
  display: flex;
  color: red;
  p {
    color: ${COLORS.black};
  }
`;

const Task = () => {
  const { tasks, deleteTask } = useTask();

  return (
    <div>
      {tasks.length === 0 ? (
        <TaskEmpty></TaskEmpty>
      ) : (
        tasks.map((task) => (
          <ContainerTask key={task.id}>
            <TaskDescription>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </TaskDescription>
            <TaskLocation>
              <p>Quito, Ecuador</p>
            </TaskLocation>
            <Divider></Divider>
            <TaskTime>
              <p>12:45 AM - 1:15 PM</p>
            </TaskTime>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button>Rename</button>
          </ContainerTask>
        ))
      )}
    </div>
  );
};

export default Task;

import styled from "styled-components";

import { COLORS } from "../constants/index";

const ContainerTask = styled.article`
  padding: 30px;
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
  return (
    <ContainerTask>
      <TaskDescription>
        <h3>Football</h3>
        <p>Ligue 1 oponer postoned after Marseille virus cases</p>
      </TaskDescription>
      <TaskLocation>
        <p>Quito, Ecuador</p>
      </TaskLocation>
      <Divider></Divider>
      <TaskTime>
        <p>12:45 AM - 1:15 PM</p>
      </TaskTime>
    </ContainerTask>
  );
};

export default Task;

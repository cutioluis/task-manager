import styled from "styled-components";
import { COLORS } from "../constants/index";

const ContainerEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
`;

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  border-radius: 20px;
  width: 350px;
  background-color: ${COLORS.blueSoft};
`;

const TaskEmpty = () => {
  return (
    <ContainerEmpty>
      <Empty>There are not tasks available</Empty>
    </ContainerEmpty>
  );
};

export default TaskEmpty;

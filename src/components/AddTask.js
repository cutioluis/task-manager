import styled from "styled-components";
import { useRouter } from "next/router";
import { COLORS } from "../constants/index";
import { BsPlusCircleFill } from "react-icons/bs";

const ContainerAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;

  /* Effect */
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(50px);
  border-radius: 50px 50px 0px 0px;
`;

const IconPlus = styled(BsPlusCircleFill)`
  cursor: pointer;
  font-size: 40px;
  color: ${COLORS.blue};
`;

const AddTask = () => {
  const { push } = useRouter();

  return (
    <ContainerAdd>
      <IconPlus onClick={() => push("/new")} />
    </ContainerAdd>
  );
};

export default AddTask;

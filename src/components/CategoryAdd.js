import styled from "styled-components";
import { SIZES } from "../constants";

const ButtonCategory = styled.button`
  padding: 15px;
  height: auto;
  width: auto;
  border: none;
  background-color: #cfecff;
  border-radius: ${SIZES.RadiusBox};
`;

const CategoryAdd = () => {
  return <ButtonCategory>👋️ Friends</ButtonCategory>
};

export default CategoryAdd;

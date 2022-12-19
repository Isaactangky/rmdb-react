import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background-color: var(--darkgrey);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  font-size: 20px;
  border: 0;
  margin: 20px auto;
  transition: all 0.3s;
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 0.8;
  }
`;

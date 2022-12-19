import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  background-color: var(--darkgrey);
`;
export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  max-width: var(--maxWidth);
  background: var(--medgrey);
  border-radius: 40px;
  margin: 0 auto;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }
  input {
    font-size: var(--fontL);
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);
    :focus {
      outline: none;
    }
  }
`;

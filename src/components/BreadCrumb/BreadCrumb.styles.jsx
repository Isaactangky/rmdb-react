import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: content;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: var(--medgrey);
  color: var(--white);
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;
  span {
    font-size: var(--fontM);
    color: var(--white);
    padding-right: 10px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontS);
    }
  }
`;

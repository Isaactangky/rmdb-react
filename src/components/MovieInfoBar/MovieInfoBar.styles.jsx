import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkgrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--medgrey);
    border-radius: 20px;
    margin: 0 20px;
    flex: 1;
    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
    .column {
      margin: 20px 0;
    }
  }
`;
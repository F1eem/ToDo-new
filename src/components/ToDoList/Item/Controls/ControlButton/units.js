import styled from "@emotion/styled";

export const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  width: 120px;
  height: 100%;
  background-color: ${({ color }) => color || "white"};
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    & > svg {
      transform: scale(0.9, 0.9);
    }
  }
`;

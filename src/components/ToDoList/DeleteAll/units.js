import styled from "@emotion/styled";

export const DeleteAllWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    text-decoration: underline;
  }
  &:active {
    opacity: 0.8;
  }
  font-size: 14px;
  color: #ff4444;
`;

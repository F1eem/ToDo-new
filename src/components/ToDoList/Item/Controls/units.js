import styled from "@emotion/styled";

export const ControlsWrapper = styled.div`
  position: absolute;
  width: 240px;
  height: 100%;
  background: lightgray;
  right: 0;
  display: ${({ visible }) => (visible ? "block" : "none")}; //now it is work!
  animation: visIn 0.4s;
  cursor: pointer;
  transform: translate(${({ visible }) => (visible ? 0 : "240px")}, 0);

  @keyframes visIn {
    from {
      transform: translate(240px, 0);
    }
    to {
      transform: translate(0, 0);
    }
  }
`;

import styled from "@emotion/styled";
import React from "react";

export const MainWrapper = styled.div`
  width: 800px;
  height: 700px;
  box-shadow: 0 0 5px grey;
  padding: 35px;
  background: url("assets/img/bg.jpeg") no-repeat grey;
  background-size: 150%;
  overflow-x: visible;
`;

export const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  overflow-x: visible;
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const ItemWrapper = styled.li`
  height: 140px;
  width: 100%;
  display: flex;
  justify-content: ${({ align }) => align || "space-between"};
  align-items: center;
  position: relative;
  opacity: 0.8;
  margin-bottom: 15px;
  background-color: ${({ bgColor, completed }) =>
    bgColor || (completed ? "#5cb3db" : "#999999")};
  list-style: none;
  padding: 25px 20px;
  color: ${({ textColor }) => textColor || "white"};
  &:hover {
    opacity: 0.9;
  }
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
  &:active {
    opacity: ${({ pointer }) => (pointer ? 0.8 : 0.9)};
  }
  transition: background-color 0.3s;
  overflow: hidden;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: ${({ w }) => w + "px"};
  height: 100%;
  justify-content: flex-end;
  cursor: ${({ pointer }) => (pointer ? "pointer" : "auto")};
  user-select: ${({ pointer }) => (pointer ? "none" : "auto")}; ;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  line-height: 150%;
`;

export const Description = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  overflow-y: hidden;
  max-height: 38px;
  max-width: 95%;
`;

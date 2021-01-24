import styled from "styled-components";

// Create styled components here
const AppWrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 500px;
  height: 80px;
  border-radius: 300px;
  padding: 0px 25px;
  margin-bottom: 25px;

  cursor: pointer;
  user-select: none;

  background-color: rgba(0, 0, 0, 0.4);
`;

const TagWrapper = styled.div`
  &:hover ${div} {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const Emoji = styled.span`
  margin-right: 20px;
  font-size: 1.6em;
`;

const Name = styled.span`
  flex-grow: 1;
  font-size: 1.6em;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
`;

const GoToGithub = styled.span`
  font-size: 0.8em;
  user-select: none;
  color: rgba(255, 255, 255, 0.3);
`;

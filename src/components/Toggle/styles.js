import styled from "styled-components";

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: auto;
  padding: 0.5rem;
  width: 8rem;
  height: 4rem;
  z-index: 4;

  img {
    height: auto;
    width: 20rem;
    transition: all 0.3s linear;
    // sun icon
    &:first-child {
      transform: ${({ darkTheme }) => darkTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ darkTheme }) => darkTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;
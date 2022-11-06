import moonIcon from '../../assets/moon.png';
import sunIcon from '../../assets/sun.png';
import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import {ToggleContainer} from "./styles"

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'dark';
  return (
    <ToggleContainer onClick={toggleTheme} >
      <img src={moonIcon}></img>
      <img src={sunIcon}></img>

    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;


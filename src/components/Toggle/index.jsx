import moonIcon from '../../assets/moon.png';
import sunIcon from '../../assets/sun.png';
import React, { useState } from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import {ToggleContainer} from "./styles"
import "./styles"
import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'dark';
  const [ isToggled, setIsToggled ] = useState(false)

  const onToggle = () => {
    setIsToggled(!isToggled)
  }
  return (
    <ToggleContainer onChange={toggleTheme}>
    <label className="toggle-switch">
    <input type="checkbox" checked={isToggled} onChange={onToggle} />
    <span className="switch" />
  </label>

    </ToggleContainer>
  );
};

//<img src={moonIcon}></img>
//<img src={sunIcon}></img>
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;


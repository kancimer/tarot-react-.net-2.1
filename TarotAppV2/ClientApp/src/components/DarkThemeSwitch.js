// DarkThemeSwitch.js

import React from 'react';
import { useDarkTheme } from './DarkThemeContext';

const DarkThemeSwitch = () => {
    const { isDark, toggleDarkTheme } = useDarkTheme();

    return (
        <label className="switch">
            <input type="checkbox" checked={isDark} onChange={toggleDarkTheme} />
            <span className="slider round"></span>
        </label>
    );
};

export default DarkThemeSwitch;

// DarkThemeContext.js

import React, { createContext, useState, useContext } from 'react';

const DarkThemeContext = createContext();

export const useDarkTheme = () => {
    return useContext(DarkThemeContext);
};

export const DarkThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleDarkTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <DarkThemeContext.Provider value={{ isDark, toggleDarkTheme }}>
            {children}
        </DarkThemeContext.Provider>
    );
};

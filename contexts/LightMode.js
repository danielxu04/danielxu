import { createContext, useState, useEffect } from 'react';

export const LightModeContext = createContext();

export function LightModeContextProvider({children}) {
    const [isLightMode, setIsLightMode] = useState('light');

    useEffect(() => setTheme(), []);

    function setTheme() {
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme === 'dark') {
            setIsLightMode('dark');
            document.querySelector('html').classList.remove('light');
        } 
    }

    function changeDisplayMode() {
        if (isLightMode === "dark") {
            setIsLightMode('light');
            document.querySelector('html').classList.remove('dark');
            document.querySelector('html').classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            setIsLightMode('dark');
            document.querySelector('html').classList.remove('light');
            document.querySelector('html').classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    return (
        <LightModeContext.Provider 
            value={{isLightMode, changeDisplayMode}}>
            {children}
        </LightModeContext.Provider>
    );
}
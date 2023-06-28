import { createContext, useState } from 'react';

export const LightModeContext = createContext();

export function LightModeContextProvider({children}) {
    const [isLightMode, setIsLightMode] = useState(false);

    return (
        <LightModeContext.Provider 
            value={{isLightMode, setIsLightMode}}>
            {children}
        </LightModeContext.Provider>
    );
}
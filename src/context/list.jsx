import React, { createContext, useState } from "react";

// Create the context
const listContext = createContext();

function Provider({ children }) {
    const [count, setCount] = useState(5);

    const valueToShare = {
        count,
        incrementCount: () => {
            setCount((prevCount) => prevCount + 1);
        }
    };

    return (
        <listContext.Provider value={valueToShare}>
            {children}
        </listContext.Provider>
    );
}

export { Provider };
export default listContext;

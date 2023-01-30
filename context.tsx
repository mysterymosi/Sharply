import { createContext, useMemo, useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}
export const GeneralContext = createContext({});

export const GeneralContextProvider = ({ children }: ContextProps) => {
  const [helpCenters, setHelpCenters] = useState([]);

  const providerValues = useMemo(
    () => ({
      helpCenters,
      setHelpCenters,
    }),
    [helpCenters]
  );

  return (
    <GeneralContext.Provider value={providerValues}>
      {children}
    </GeneralContext.Provider>
  );
};

import { useContext } from "react";
import { DropdownContext } from "./Dropdown";

function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (context === undefined || context === null) {
    throw new Error(
      "useDropdownContext must be used within a DropdownProvider",
    );
  }
  return context;
}

export default useDropdownContext;

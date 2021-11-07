import { createContext } from "react";

import sections from "./directory.data";

const DirectoryContext = createContext({
    sections: sections
});

export default DirectoryContext;
import FirstToolbar from "./FirstToolbar";
import { useState } from "react";

let defaultVal: string = "";

const FirstToolbarContainer = () => {
    const [ zip, setZip ] = useState<string>(defaultVal);

    const setValue = () => {
        setZip(defaultVal);
    };

    const setElementValue = (e: any) => {
        defaultVal = e.target.value;
    }

    return (
        <FirstToolbar handleState={setValue} handler={setElementValue} />
    )
}

export default FirstToolbarContainer;
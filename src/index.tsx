import {createRoot} from "react-dom/client";
import {App} from "./components/App";

console.log('test',1+3);

const root = document.getElementById('root')

if(!root){
    throw new Error('root not found')

}

const container = createRoot(root)

container.render(<App/>)

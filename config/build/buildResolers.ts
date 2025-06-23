import {Configuration} from "webpack";
import {BuildOptions} from "./types/types";

export function buildResulvers(options:BuildOptions):Configuration['resolve']{
    return{
        extensions: ['.tsx', '.ts', '.js'],
    }
}
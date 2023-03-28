import { ChildrenType } from "./children";

export type ButtonType = {
    children: ChildrenType;
    mode: 'dark' | 'light' | 'disabled';
    route?: string;
    onClick?: () => void;
    Icon?: React.ElementType

}
import { ChildrenType } from "./children";

export type ButtonType = {
    children: ChildrenType;
    mode: 'dark' | 'light';
    route?: string;
    onClick?: () => void;
    Icon?: React.ElementType

}
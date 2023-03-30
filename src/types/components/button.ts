import { ChildrenType } from "../utils/children";

export type ButtonType = {
    children: ChildrenType;
    mode: 'dark' | 'light' | 'disabled';
    href?: string;
    onClick?: () => void;
    Icon?: React.ElementType

}
import { Movie, Serie } from "@/types/utils";
import { ChildrenType } from "@/types/utils/children";
import { ProductionType } from "@/types/utils/production";

export type SliderProps = {
    // children: ChildrenType;
    productions: (Movie | Serie)[]
    title?: Capitalize<string>;
}
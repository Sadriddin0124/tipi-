import { HoverItemType } from "./all.types";

export type Route = '/' | '/about' | '/contact';
export interface NavLinkType {
    label: string;
    path: string;
    id?: number;
    href?: string;
    hover: boolean;
    item1?: HoverItemType[];
    item2?: HoverItemType[];
}
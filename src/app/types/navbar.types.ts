export type Route = '/' | '/about' | '/contact';
export interface NavLinkType {
    label: string;
    path: string;
    id?: number;
    href?: string
}
export type Route = '/' | '/about' | '/contact';
export interface NavLinkType {
    label: string;
    path: Route;
    id?: number
}
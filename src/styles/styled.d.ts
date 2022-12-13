import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    background: string;
    color: string;
    section: string;
    showButton: string;
    select: string;
    lineSidebar: string;
    colorLinkSidebar: string;
  }
}

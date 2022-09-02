export type sidebarProps = {
    isCollapsed?:boolean;
    collapseBar?:()=>void;
}

type subMenuData = {
    name: string;
    subPath: string;
}

export type sidebarMenuProp={
    id:number;
    title: string;
    Icon: React.JSXElement;
    activeIconColor:string;
    path:string;
    subMenu?:subMenuData[]
}
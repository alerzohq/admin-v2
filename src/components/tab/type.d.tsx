export type TabsPageProps = {
    children?: React.ReactNode;
}

export type TabsTitleProps = {
    active?: boolean;
    item: TabItem, 
    tabs?: TabItem[]
    color?: string;
    onClick: ()=>void;
}
export type TabsProps = {
    tabs:TabItem[];
    setActive: (e: number)=>void;
    active: number;
    color?: string;
}
export type TabItem = {
    label: string;
    value: string;


}
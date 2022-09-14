type TabWidgetItemProps ={
    isLoading:boolean;
    isFetching:boolean;
    hideStatus?:boolean;
    title?:string;
    routePath?: string;
    status?: string;
    tabs:TabItem[];
    currentValue?:string;
    isError?: boolean;
    errorMessage: string;
    type?: string;
    renderSwitch: React.JSXElement;
}
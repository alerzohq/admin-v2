export type TableProps={
    tableData:{}[];
    tableHeaders:string[];
    hideFilter?:boolean;
    hideCheckInput?:boolean;
    hideSort?:boolean;
    hideSortIcon?:boolean;
    onClick?:(item:{}) => void;
}

export type PopupProps={
    show?:boolean;
}

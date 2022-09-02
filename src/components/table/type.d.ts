export type TableProps={
    tableData:{}[];
    tableHeaders:string[]; 
    hideFilter?:boolean;
    hideCheckInput?:boolean;
    hideSort?:boolean;
    tableName:string;

    onClick?:(item:{}) => void;
}

export type PopupProps={
    show?:boolean;
}

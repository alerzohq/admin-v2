import React from "react"

export type FlexTableProps = {
    children: React.ReactNode;

}
export type FlexTableRowProps = {
    children?: string | React.Node;
    flex?: string;
    topLeftRadius?: string;
    topRightRadius?:string;
    bottomLeftRadius?: string;
    bottomRightRadius?:string;
    selfAlign?:string;
    bgTopColor? :string;
    data: TransactionData | BillerData | RecipientData;
    header:HeaderData[];
    bgBottomColor?: string;
}

export type TransactionData = {
    name: string;
    amount: string;
    type: string;
    total: string;
    summary:string;
}
export type BillerData = {
    displayName: string;
    billerReference: string;
    channel: string;
}
export type RecipientData = {
    name: string;
    product: string;
    package: string;
    reference: string;
    userId: string;
}
export type HeaderData = {
    label: string;
    value: keyof typeof TransactionData; 
    columnWidth?: string;
}
// export type FlexTableRowProps = {
//     children?: string | React.Node;
//     flex?: string;
//     topLeftRadius?: string;
//     topRightRadius?:string;
//     bottomLeftRadius?: string;
//     bottomRightRadius?:string;
//     selfAlign?:string;
//     bgTopColor? :string;
// }
// export type FlexTableColumnProps = {
//     width?: string;
//     flex?: string;
//     rbColor?: string;
//     bgColor?: string;
//     bgTopColor?: string; 
//     bgBottomColor: string;
//     children?: string | React.Node;
 
//     topText?: string;
//     bottomText: string;
// }
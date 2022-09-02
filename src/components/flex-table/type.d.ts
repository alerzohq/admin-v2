import React from "react"

export type FlexTableProps = {
    children: React.ReactNode;

}
export type FlexTableRowProps = {
    children?: string | React.Node;

}
export type FlexTableColumnProps = {
    width?: string;
    rbColor?: string;
    bgColor: string;
    children?: string | React.Node;
}
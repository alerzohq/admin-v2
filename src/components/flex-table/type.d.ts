import React from "react"

export type FlexTableProps = {
    children: React.ReactNode;
}
export type FlexTableRowProps = {
   color: string;
   bgColor: string;
   children: React.ReactNode;

}
export type FlexTableColumnProps = {
    rowCount?: number;
    rbColor?: string;
    children?: string | React.Node;
 }
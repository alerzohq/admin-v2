import { FlexTable, FlexTableColumn, FlexTableRow } from "./styles/flex-table.styles"
import { FlexTableColumnProps, FlexTableProps, FlexTableRowProps } from "./type";

const FlexTableWrapper = ({ children }: FlexTableProps) => {
    return (
        <FlexTable>
            {children}
        </FlexTable>
    )
}
export default FlexTableWrapper;
FlexTableWrapper.FlexTableColumn = function TableColumns({ rowCount, rbColor, children }: FlexTableColumnProps) {
    return (
        <FlexTableColumn rbColor={rbColor} rowCount={rowCount}>
            {children} 
        </FlexTableColumn>
    )
}

FlexTableWrapper.FlexTableRow = function TableRow({ color, bgColor, children }: FlexTableRowProps) {
    return (
        <FlexTableRow color={color} bgColor={bgColor}>
         {children}      
        </FlexTableRow>
    )
}

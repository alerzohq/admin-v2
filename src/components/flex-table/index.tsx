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
FlexTableWrapper.FlexTableColumn = function TableColumns({ width, rbColor, children, bgColor }: FlexTableColumnProps) {
    return (
        <FlexTableColumn rbColor={rbColor} width={width}  bgColor={bgColor}>
            {children} 
        </FlexTableColumn>
    )
}

FlexTableWrapper.FlexTableRow = function TableRow({ children }: FlexTableRowProps) {
    return (
        <FlexTableRow>
         {children}      
        </FlexTableRow>
    )
}

import styled from 'styled-components/macro';
type rowProps = {
    bgColor: string;
    color: string;
}
type columnProps = {
    rowCount?: number;
    rbColor?: string;
}
export const FlexTable = styled.div`
    display: block;
    margin: 2em auto;
    width: 100%;
    min-width: 600px;
`
export const FlexTableRow = styled.div<rowProps>`
    display: flex;
    flex-flow: row wrap;
    transition: 0.5s;
    background: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
`
export const FlexTableColumn = styled.div<columnProps>`
    width: ${({ rowCount }) => rowCount ? `calc(${100 / rowCount})%` : "100%"};
    text-align: center;
    padding: 0.5em 0.5em;
    border-right:${({rbColor})=> rbColor ? `1px solid ${rbColor}` : "none"};
`
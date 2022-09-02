import { Color } from "../../../../../assets/theme";
import { FlexTableWrapper, Text } from "../../../../../components";
import { FlexTableColumn } from "../../../../../components/flex-table/styles/flex-table.styles";
import { DETAILSTABLE } from "../../../../../data/tab-data";

const DetailsContent = ({ data }: any) => {
    const renderSwitch = (param: string) => {
        switch (param) {
            case 'large':
                return "22%";
            case 'medium':
                return "13%"
            default:
                return "11%"
        }
    }
    return(
        <FlexTableWrapper.FlexTableRow >
        {DETAILSTABLE.map((detail,index) => {
            return (
                <FlexTableColumn  leftRadius={index === 0 ? "12px" : "0"} rightRadius={index === DETAILSTABLE.length - 1  ? "12px" : "0"}  width={renderSwitch(detail.columnWidth)}>
                    <Text as={'p'}
                        padding={'0'}
                        align={'center'}>
                        {detail.label}
                    </Text>
                </FlexTableColumn>
            )
        })}
    </FlexTableWrapper.FlexTableRow>
)

}

export default DetailsContent;
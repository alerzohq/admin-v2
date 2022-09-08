import { Text } from "..";
import { Color } from "../../assets/theme";
import { capitalizeFirstLetter, capitalizeFirstLetterInSentence, numberWithCommas } from "../../utils/formatValue";
import { resolveTableColor } from "../../utils/resolveColors";
import { CardItem, CardWrapper, CardContainer } from "./styles/flex-table.styles"
import { FlexTableProps, FlexTableRowProps } from "./type";

const FlexTableWrapper = ({ children }: FlexTableProps) => {
    return (
        <CardWrapper>
            {children}
        </CardWrapper>
    )
}
export default FlexTableWrapper;


FlexTableWrapper.Row = function CardRow({ data, header, bgBottomColor }: FlexTableRowProps) {
    const renderSwitch = (param: string) => {
        switch (param) {
            case 'large':
                return "2";
            case 'extraLarge':
                return "4";
            default:
                return "1"
        }
    }
    return (
        <CardWrapper>
            {header.map((detail, index) => {
                const field = header[index]?.value as string;
                const amt = field as keyof typeof data === "amount" || field as keyof typeof data === "balance" ? `₦${numberWithCommas(data[field as keyof typeof data])}` : (capitalizeFirstLetterInSentence(data[field as keyof typeof data]));
                let color: string = '';
                let bgColor: string = '';
                if (field as keyof typeof data === "status") {
                    const resolveData = resolveTableColor(data[field as keyof typeof data]);
                    color = resolveData.textColor;
                    bgColor = resolveData.bgColor;


                }
                return (
                    <CardContainer flex={renderSwitch(detail.columnWidth || "small")}>
                        <CardItem padding={".7em 1.2em"} flex={"0"} topLeftRadius={index === 0 ? "12px" : "0"} topRightRadius={header.length - 1 === index ? "12px" : "0"}>
                            <Text as={'p'}
                                padding={'0'}
                                color={Color.alerzoGrayTwo}
                                size="14px"
                                textAlign="left"
                                whiteSpace="nowrap"
                                weight="600"
                                align={'center'}>
                                {detail.label}
                            </Text>
                        </CardItem>
                        <CardItem margin="2em 0" showBorder={header.length - 1 !== index} padding="0 1em" flex={"3"} bgColor={bgBottomColor} bottomLeftRadius={index === 0 ? "12px" : "0"} bottomRightRadius={header.length - 1 === index ? "12px" : "0"}>
                            <Text as={'p'}
                                padding={'0 .1em'}
                                color={field as keyof typeof data === "status" ? color : Color.alerzoBlack}
                                bgColor={field as keyof typeof data === "status" ? bgColor : "transparent"}
                                justifyContent={field as keyof typeof data === "status" ? "center" : "left"}
                                textAlign="left"
                                weight={field as keyof typeof data === "status" ? "600" : "400"}
                                width={field as keyof typeof data === "status" ? "fit-content" : "auto"}
                                size="14px"
                                align={'center'}>
                                {data[field as keyof typeof data] ? amt : ''}
                            </Text>
                        </CardItem>
                    </ CardContainer>
                )
            })}

        </CardWrapper>
    )
}

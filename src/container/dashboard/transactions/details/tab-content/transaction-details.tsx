import { TabContentContainer } from "./styles/tab-content.styles";
import { FlexTableWrapper } from "../../../../../components";
import { TableData } from "../../../../../components/flex-table/type";
import { Color } from "../../../../../assets/theme";


const DetailsContent = ({ resolvedData }: { resolvedData: TableData[] }) => {
    return (
        <>
            {resolvedData?.map((item, index) => {
                if (item?.spacing === true) {
                    return (
                        <TabContentContainer key={index}>
                            <FlexTableWrapper.Row
                                data={item?.data}
                                header={item?.header}
                                bgBottomColor={Color.alerzoWhite}
                            />
                        </TabContentContainer>
                    )
                }
                return (

                    <FlexTableWrapper.Row
                        key={index}
                        data={item?.data}
                        header={item.header}
                        bgBottomColor={Color.alerzoWhite}
                    />


                )

            })}
        </>
    )

}

export default DetailsContent;
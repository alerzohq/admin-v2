import {  TabContentContainer } from "./styles/tab-content.styles";
import { FlexTableWrapper } from "../../../../../components";
import { TableData } from "../../../../../components/flex-table/type";


const DetailsContent = ({ resolvedData }: { resolvedData: TableData[] }) => {
    return (
        <>
            {resolvedData?.map((item) => {
                if (item?.spacing === true) {
                    return (
                        <TabContentContainer>
                            <FlexTableWrapper.Row
                                data={item?.data}
                                header={item?.header}
                                bgBottomColor="#FFFFFF"
                            />
                        </TabContentContainer>
                    )
                }
                return (

                    <FlexTableWrapper.Row
                        data={item?.data}
                        header={item.header}
                        bgBottomColor="#FFFFFF"
                    />


                )

            })}
        </>
    )

}

export default DetailsContent;
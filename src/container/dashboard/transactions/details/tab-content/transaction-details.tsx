import {  TabContentContainer } from "./styles/tab-content.styles";
import { FlexTableWrapper } from "../../../../../components";
import { TableData } from "../../../../../components/flex-table/type";
import Content from "../../../../../components/dashboard-contents";


const DetailsContent = ({ resolvedData }: { resolvedData: TableData[] }) => {
    console.log(resolvedData, "resolved")
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
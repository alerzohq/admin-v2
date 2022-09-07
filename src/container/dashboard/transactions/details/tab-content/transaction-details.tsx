import {  TabContentContainer } from "./styles/tab-content.styles";
import { FlexTableWrapper } from "../../../../../components";
import { DETAILSTABLE, RECIPIENTTABLE, SESSIONTABLE } from "../../../../../data/tab-data";
import { detailsHelper } from "../../../../../data/tab-data-helper";
import { TableData } from "../../../../../components/flex-table/type";
import Content from "../../../../../components/dashboard-contents";


const DetailsContent = ({ resolvedData }: { resolvedData: TableData[] }) => {
    console.log(resolvedData, "resolved")
    return (
        <Content>
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
        </Content>
    )

}

export default DetailsContent;
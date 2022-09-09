import { Content, TabContentContainer } from "./styles/tab-content.styles";
import { FlexTableWrapper } from "../../../../../components";
// import { DETAILSTABLE, RECIPIENTTABLE, SESSIONTABLE } from "../../../../../data/tab-data";
import { detailsHelper, otherHelper } from "../../../../../data/tab-data-helper";


const OthersContent = ({ data, slug }: { data: any, slug: string }) => {
    const resolveData = otherHelper(data);
    return (
        <Content>
            {resolveData?.map((item) => {
                if (item?.spacing === true) {
                    return (
                        <TabContentContainer>
                            <FlexTableWrapper.Row
                                data={item?.data}
                                header={item.header}
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

export default OthersContent;
import { TabContentContainer } from "./styles/tab-content.styles";
import { FlexTableWrapper } from "../../../../../components";
import { DETAILSTABLE, RECIPIENTTABLE, SESSIONTABLE } from "../../../../../data/tab-data";


const DetailsContent = ({ data }: any) => {
    return (
        <>
            <FlexTableWrapper.Row
                data={data}
                header={DETAILSTABLE}
                bgBottomColor="#FFFFFF"
            />
            <FlexTableWrapper.Row
                data={{
                    displayName: data?.biller?.displayName,
                    billerReference: data?.billerReference,
                    channel: data.channel
                }}
                header={SESSIONTABLE}
                bgBottomColor="#FFFFFF"
            />
            <TabContentContainer>
                <FlexTableWrapper.Row
                    data={data?.recipient}
                    header={RECIPIENTTABLE}
                    bgBottomColor="#FFFFFF"
                />
            </TabContentContainer>

        </>
    )

}

export default DetailsContent;
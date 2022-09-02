import { useState } from 'react';
import { Color } from '../../../../assets/theme';
import { TabsPage, Notification } from '../../../../components';
import FlexTableWrapper from '../../../../components/flex-table';
import { FlexTableColumn, FlexTableRow } from '../../../../components/flex-table/styles/flex-table.styles';

const TABS = [
    { label: "Transaction Details", value: "details", showTitle: true },
    { label: "Other Information", value: "other", showTitle: true },
    { label: "Transaction Receipt", value: "receipt", showTitle: true },
    { label: "Staff Notes", value: "notes" },
];

const TabsContainer = () => {
    const [active, setActive] = useState(0);
    return (
        <>
            <Notification label={"Successful Transaction!"} color={Color.alerzoTableSuccess} bgColor={Color.alerzoTableSuccessBg} />
            <TabsPage.Tabs color={Color.alerzoGreyTint} tabs={TABS} active={active} setActive={setActive} />
            <TabsPage.Switch color={Color.alerzoGreyTint} tabs={TABS} active={active} setActive={setActive} />
        </>

    )
}

export default TabsContainer;

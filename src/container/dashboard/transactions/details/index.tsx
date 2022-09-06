import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Color } from '../../../../assets/theme';
import { TabsPage, Notification, Text, Jumbotron } from '../../../../components';
import { TABS, transaction } from '../../../../data/tab-data';
import { capitalizeFirstLetter } from '../../../../utils/formatValue';
import TabsContentContainer from './tab-content';



const TabsContainer = () => {
    const [active, setActive] = useState(0);
    const location = useLocation();
    const thePath = location.pathname;
    const activeTab = thePath.substring(thePath.lastIndexOf('/') + 1);
    const search = useLocation().search;
    const queryParam = new URLSearchParams(search).get('status');
    const title = TABS[active]?.title;
    console.log(title, active)
    const renderSwitch = () => {
        switch (queryParam) {
            case 'other':
                return <div>Others</div>
            case 'receipt':
                return <div>Receipt</div>
            case 'notes':
                return <div>Notes</div>
            default:
                return <TabsContentContainer data={transaction} />;
        }
    }
    return (
        <>
            <Notification label={`${capitalizeFirstLetter(transaction?.status)} Transaction!`} color={Color.alerzoTableSuccess} bgColor={Color.alerzoTableSuccessBg} />

            <TabsPage.Tabs color={Color.alerzoGreyTint} tabs={TABS} active={active} setActive={setActive} />
            {title && <Text as={'p'}
                    padding={'.8em 0 0 0'}
                    color={Color.alerzoBlack}
                    weight='600'
                    align={'center'}>
                    {title}
                </Text>}
                {renderSwitch()}

        </>

    )
}

export default TabsContainer;

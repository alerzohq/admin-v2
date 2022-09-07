import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Color } from '../../../../assets/theme';
import { TabsPage, Notification, Text, Jumbotron, Loader } from '../../../../components';
import { encrypt } from '../../../../configs/secure-data';
import { TABS } from '../../../../data/tab-data';
import { useQuery } from 'react-query';
import { getResource } from '../../../../utils/apiRequest';
import { capitalizeFirstLetter } from '../../../../utils/formatValue';
import DetailsContent from './tab-content/transaction-details';
import { detailsHelper, otherHelper } from '../../../../data/tab-data-helper';
import { resolveColor } from '../../../../utils/resolveColors';



const TabsContainer = () => {
    const [active, setActive] = useState(0);
    const location = useLocation();
    const thePath = location.pathname;
    var result = thePath.split('/');
    const slug = result[4];
    const id = result[3];
    const search = useLocation().search;
    const queryParam = new URLSearchParams(search).get('status');
    const title = TABS[active]?.title;
    const getTransactions = () => {
        return getResource(`transactions?query=${id}`)
    }

    const { isLoading, data, isError, isFetching } = useQuery('transactions', getTransactions);

    const renderSwitch = () => {
        switch (queryParam) {
            case 'other':
                return <DetailsContent resolvedData={otherHelper(data?.data?.[0])!} />;
            case 'receipt':
                return <div>Receipt</div>
            case 'notes':
                return <div>Notes</div>
            default:
                return <DetailsContent resolvedData={detailsHelper(slug, data?.data?.[0])!} />;
        }
    }
  
    const status: string = data?.data[0]?.status; 
    let colors = resolveColor(status);

    return (
        <>
            {!isLoading && !isFetching && <Notification label={status ? `${capitalizeFirstLetter(status)} Transaction!` : ''} color={colors?.textColor} bgColor={colors?.bgColor} />}

            {isLoading || isFetching ? <Loader /> :
                <>
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
            }



        </>

    )
}

export default TabsContainer;

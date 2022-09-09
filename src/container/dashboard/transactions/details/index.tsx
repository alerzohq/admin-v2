import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Color } from '../../../../assets/theme';
import { TabsPage, Notification, Text, Loader, LineLoader, FallBack } from '../../../../components';
import { useQuery } from 'react-query';
import { getResource } from '../../../../utils/apiRequest';
import { capitalizeFirstLetter } from '../../../../utils/formatValue';
import DetailsContent from './tab-content/transaction-details';
import { TABS } from '../../../../data/tab-data';
import { detailsHelper, otherHelper } from '../../../../data/tab-data-helper';
import { Container } from '../../../../components/layout';



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
    const resolveColor = (status: string) => {
        if (status === "successful") {
            return {
                color: Color.alerzoTableSuccess,
                bg: Color.alerzoTableSuccessBg,
            }
        } else if (status === "failed") {
            return {
                color: Color.alerzoDanger,
                bg: Color.alerzoErrorBg,
            }
        } else {
            return {
                color: Color.alerzoWarningText,
                bg: Color.alerzoWarningBg,
            }
        }

    }
    let colors = resolveColor(status);

    return (

        <Container showFilters={false} title={'Transaction Details'}>
            {!isLoading && <Notification label={status ? `${capitalizeFirstLetter(status)} Transaction!` : ''} color={colors?.color} bgColor={colors?.bg} />}
            {isFetching && !isLoading && <LineLoader />}
            {isLoading ? <Loader /> :
                <>
                    <TabsPage.Tabs color={Color.alerzoGreyTint} tabs={TABS} active={active} setActive={setActive} />
                    {title && <Text as={'p'}
                        padding={'.8em 0 0 0'}
                        color={Color.alerzoBlack}
                        weight='600'
                        align={'center'}>
                        {title}
                    </Text>}
                    {isError ?
                        <FallBack
                            error
                            title={"Failed to load transaction. "}

                        /> : renderSwitch()}
                </>
            }


        </Container>


    )
}

export default TabsContainer;

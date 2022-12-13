import { useLocation } from 'react-router-dom'
import TabsContentWidget from '../../../widget/tabs/tab-content'
import {
  TABS,
  terminalRequestHelper,
  TERMINALREQUESTTABS,
} from '../../../../../data/terminal-data'
import DetailsContent from '../../../widget/tabs/tab-content-details'
import { Wrapper } from './styles/request-details.style'
import POSRow from './pos-row'

const TerminalRequestDetails = () => {
  const search = useLocation().search
  const queryParam = new URLSearchParams(search).get('status')
  const found = TABS.find((element) => element.value === queryParam)
  const title = found ? found?.title : TABS[0]?.title

  const renderSwitch = () => {
    switch (queryParam) {
      case 'order-process':
        return <div>Terminal Order Status History</div>
      default:
        return (
          <>
            <DetailsContent resolvedData={terminalRequestHelper()} />
            <Wrapper>
              <POSRow />
            </Wrapper>
          </>
        )
    }
  }

  return (
    <>
      <TabsContentWidget
        isFetching={false}
        isLoading={false}
        containerTitle="Terminal Request Details"
        title={title}
        type="Transaction!"
        isError={false}
        errorMessage="Failed to load terminal request."
        currentValue={found?.value || 'details'}
        renderSwitch={renderSwitch}
        tabs={TERMINALREQUESTTABS}
        hideStatus
        routePath={'/dashboard/terminals'}
      />
    </>
  )
}

export default TerminalRequestDetails

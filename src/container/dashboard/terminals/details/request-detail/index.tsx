import { useLocation } from 'react-router-dom'
import TabsContentWidget from '../../../widget/tabs/tab-content'
import { TABS, TERMINALREQUESTTABS } from '../../../../../data/terminal-data'
import { DetailsContentComp } from './details-content'
import TerminalOrder from '../order-detail'

const TerminalRequestDetails = () => {
  const search = useLocation().search
  const queryParam = new URLSearchParams(search).get('status')
  const found = TERMINALREQUESTTABS.find(
    (element) => element.value === queryParam
  )
  const title = found ? found?.title : TABS[0]?.title

  const renderSwitch = () => {
    switch (queryParam) {
      case 'order-process':
        return <TerminalOrder />
      default:
        return <DetailsContentComp />
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

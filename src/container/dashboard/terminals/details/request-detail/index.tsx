import { useLocation } from 'react-router-dom'
import TabsContentWidget from '../../../widget/tabs/tab-content'
import { TABS, TERMINALREQUESTTABS } from '../../../../../data/terminal-data'
import { DetailsContentComp } from './details-content'
import TerminalOrder from '../order-detail'
import { useAppContext } from '../../../../../context'

const TerminalRequestDetails = () => {
  const location = useLocation()
  const state = location.state as TerminalReqDetails
  const { search, pathname } = location
  const queryParam = new URLSearchParams(search)?.get('status')
  const found = TERMINALREQUESTTABS.find(
    (element) => element.value === queryParam
  )
  const title = found ? found?.title : TABS[0]?.title
  const {
    state: { terminalReq },
  } = useAppContext()

  const renderSwitch = () => {
    switch (queryParam) {
      case 'order-process':
        return (
          <TerminalOrder
            data={state?.detail?.status || terminalReq?.status}
            terminalId={pathname.split('/').pop()}
          />
        )
      default:
        return (
          <DetailsContentComp
            data={state || terminalReq}
            terminalId={pathname.split('/').pop()}
          />
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
        currentValue={queryParam! ?? 'details'}
        renderSwitch={renderSwitch}
        tabs={TERMINALREQUESTTABS}
        hideStatus
        routePath={'/dashboard/terminals?status=requests'}
      />
    </>
  )
}

export default TerminalRequestDetails

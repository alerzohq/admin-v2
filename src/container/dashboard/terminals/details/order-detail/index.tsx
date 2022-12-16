import { TimelineWrapper, Timeline, TimelineItem } from './styles/order-detail.styles'
import Button from '../../../../../components/button/index';


const TerminalOrder = () => {
  return (
    <TimelineWrapper>
      <Timeline>
        <TimelineItem className="is-done">
          <strong>Terminal Requested By Merchant</strong>
          <span>12-09-2022</span>
        </TimelineItem>
        <TimelineItem className="current">
        <strong>Terminal Requested By Merchant</strong>
          <span>12-09-2022</span>
        </TimelineItem>
        <TimelineItem>Terminal Requested By Merchant</TimelineItem>
        <TimelineItem>Terminal Requested By Merchant</TimelineItem>
        <TimelineItem>Terminal Requested By Merchant</TimelineItem>{' '}
        <TimelineItem className='last'>Terminal Requested By Merchant</TimelineItem>
      </Timeline>
      <Button
        margin="2rem 0"
        onClick={() => {}}
        className="add-button"
        width="auto"
      >
        Update Terminal Status
      </Button>
    </TimelineWrapper>
  )
}

export default TerminalOrder

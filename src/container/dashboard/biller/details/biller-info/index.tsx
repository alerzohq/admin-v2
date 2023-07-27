import { Button, Jumbotron } from '../../../../../components'
import Heading from '../../../widget/heading'
import { Color } from '../../../../../assets/theme'
import MinDataTable from './min-table'
import { billerTableHeaders } from '../../../../../data/biller-data'

const BillerInfo = ({ data }: { data: Record<string, string> }) => {

  const featureFlag = process.env.NODE_ENV ==='development'

  return (
    <>
      <Heading text="Biller Details">
        {featureFlag && (
          <Button
            onClick={() => {}}
            width="140px"
            variant={
              data?.disabled ? Color.alerzoDanger100 : Color.alerzoGreenBg
            }
            color={data?.disabled ? Color.alerzoDanger : Color.alerzoGreen}
            weight="600"
          >
            {data?.disabled ? 'Disabled' : 'Enabled'}
          </Button>
        )}
      </Heading>
      <Jumbotron padding="0" mt="1rem" mb="2rem" minHeight="150px">
        <MinDataTable data={data} tableHeaders={billerTableHeaders} />
      </Jumbotron>
    </>
  )
}

export default BillerInfo

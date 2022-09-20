import { Color } from '../../../../assets/theme'
import { FlexTableWrapper } from '../../../../components'
import { TableData } from '../../../../components/flex-table/type'
import { TabContentContainer } from '../../transactions/details/tab-content/styles/tab-content.styles'

const DetailsContentWidget = ({
  resolvedData,
}: {
  resolvedData: TableData[]
}) => {
  console.log(resolvedData)
  return (
    <>
      {resolvedData?.map((item, index) => {
        if (item?.spacing === true) {
          return (
            <TabContentContainer key={index}>
              <FlexTableWrapper.Row
                data={item?.data}
                header={item?.header}
                bgBottomColor={Color.alerzoWhite}
              />
            </TabContentContainer>
          )
        }
        return (
          <FlexTableWrapper.Row
            key={index}
            data={item?.data}
            header={item.header}
            bgBottomColor={Color.alerzoWhite}
          />
        )
      })}
    </>
  )
}

export default DetailsContentWidget

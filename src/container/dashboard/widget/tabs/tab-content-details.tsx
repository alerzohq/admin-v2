import { Color } from '../../../../assets/theme'
import { FlexTableWrapper, Text } from '../../../../components'
import { TableData } from '../../../../components/flex-table/type'
import { TabContentContainer } from '../../transactions/details/tab-content/styles/tab-content.styles'

const DetailsContentWidget = ({
  resolvedData,
}: {
  resolvedData: TableData[]
}) => {
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
          <>
            {item?.title && (
              <Text
                as={'p'}
                padding={'1.5em 0 0 0'}
                color={Color.alerzoBlack}
                weight="600"
                align={'center'}
              >
                {item?.title}
              </Text>
            )}
            <FlexTableWrapper.Row
              key={index}
              data={item?.data}
              header={item.header}
              bgBottomColor={Color.alerzoWhite}
            />
          </>
        )
      })}
    </>
  )
}

export default DetailsContentWidget

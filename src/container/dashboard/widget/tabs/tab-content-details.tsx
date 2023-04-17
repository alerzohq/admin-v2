import { Fragment } from 'react'
import { Color } from '../../../../assets/theme'
import { Button, FlexTableWrapper, Text } from '../../../../components'
import {
  TabContentContainer,
  HeaderContainer,
} from '../../transactions/details/tab-content/styles/tab-content.styles'
import useUpgradeUser from '../../businesses/hooks/useUpgradeUser'

const DetailsContentWidget = ({
  resolvedData,
  userId,
  userType,
  documentNumber,
}: {
  resolvedData: { [key: string]: any }[]
  userId?: any
  userType?: any
  documentNumber?: any
}) => {
  console.log(resolvedData)
  const { mutate, isLoading } = useUpgradeUser(userId, userType, documentNumber)

  console.log(userId, userType)

  const onSubmit = () => {
    // if (userId && userType) {
    mutate()
    // }
  }
  return (
    <>
      {resolvedData?.map((item, index) => {
        return (
          <Fragment key={index}>
            {item?.spacing ? (
              <TabContentContainer key={index}>
                <FlexTableWrapper.Row
                  data={item?.data}
                  header={item?.header}
                  clickable={item?.clickable}
                  bgBottomColor={Color.alerzoWhite}
                />
              </TabContentContainer>
            ) : (
              <>
                <HeaderContainer>
                  {item?.title && (
                    <Text
                      as="p"
                      padding="1.5em 0 0 0"
                      color={Color.alerzoBlack}
                      weight="600"
                      align="center"
                    >
                      {item?.title}
                    </Text>
                  )}
                  {item?.button && item?.bvnVerified && (
                    <Button
                      onClick={onSubmit}
                      height={'45px'}
                      width="130px"
                      borderSize="1px"
                      color={Color.alerzoBlue}
                      variant="transparent"
                      borderColor={Color.alerzoBlue}
                      loading={isLoading}
                    >
                      {'Verify'}
                    </Button>
                  )}
                </HeaderContainer>
                <FlexTableWrapper.Row
                  key={index}
                  data={item?.data}
                  header={item.header}
                  bgBottomColor={Color.alerzoWhite}
                  clickable={item?.clickable}
                />
              </>
            )}
          </Fragment>
        )
      })}
    </>
  )
}

export default DetailsContentWidget

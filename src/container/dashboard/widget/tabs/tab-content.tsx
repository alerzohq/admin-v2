import { Color } from '../../../../assets/theme'
import {
  Button,
  FallBack,
  Loader,
  Notification,
  Stack,
  TabsPage,
  Text,
} from '../../../../components'
import { Container } from '../../../../components/layout'
import { capitalizeFirstLetter } from '../../../../utils/formatValue'
import { resolveColor } from '../../../../utils/resolveColors'

const TabsContentWidget = ({
  isFetching,
  isLoading,
  title,
  routePath,
  status,
  tabs,
  currentValue,
  errorMessage,
  isError,
  type,
  showfilters,
  borderRadius,
  hideStatus,
  containerTitle,
  renderSwitch,
  btnLabel,
  btnVariant,
  btnHandler,
  secondBtnHandler,
  seconddBtnLabel,
  seconddBtnVariant,
}: TabWidgetItemProps) => {
  let colors = resolveColor(status)

  return (
    <Container
      showFilters={showfilters ?? false}
      isFetching={isFetching}
      title={containerTitle}
      routePath={routePath}
      filterValue={false}
    >
      {!hideStatus && !isLoading && (
        <Notification
          label={status ? `${capitalizeFirstLetter(status)} ${type}` : ''}
          color={colors?.color}
          bgColor={colors?.bg}
        />
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TabsPage.Tabs
            hideStatus={hideStatus}
            color={Color.alerzoBlack}
            tabs={tabs}
            currentValue={currentValue}
            borderRadius={borderRadius}
          />
          {title && (
            <Stack direction="row" width="100%" justifyContent="space-between">
              <Text
                as={'p'}
                padding={'.8em 0 0 0'}
                color={Color.alerzoBlack}
                weight="600"
                align={'center'}
              >
                {title}
              </Text>
              <Stack  direction="row" width="max-content" gap='20px'>
                {btnHandler && (
                  <Button
                    onClick={btnHandler}
                    width="130px"
                    variant="transparent"
                    color={btnVariant ?? Color.alerzoBlue}
                    borderColor={btnVariant ?? Color.alerzoBlue}
                  >
                    {btnLabel ?? 'Add label'}
                  </Button>
                )}
                {secondBtnHandler && (
                  <Button
                    onClick={secondBtnHandler}
                    width="130px"
                    variant="transparent"
                    color={seconddBtnVariant ?? Color.alerzoBlue}
                    borderColor={seconddBtnVariant ?? Color.alerzoBlue}
                  >
                    {seconddBtnLabel ?? 'Add label'}
                  </Button>
                )}
              </Stack>
            </Stack>
          )}
          {isError ? (
            <FallBack
              error
              title={errorMessage || 'Something went wrong, try again!'}
            />
          ) : (
            renderSwitch()
          )}
        </>
      )}
    </Container>
  )
}

export default TabsContentWidget

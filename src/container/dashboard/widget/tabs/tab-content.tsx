import { Color } from '../../../../assets/theme'
import {
  FallBack,
  Loader,
  Notification,
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
  hideStatus,
  containerTitle,
  renderSwitch,
}: TabWidgetItemProps) => {
  let colors = resolveColor(status)
  return (
    <Container
      showFilters={false}
      isFetching={isFetching}
      title={containerTitle}
      routePath={routePath}
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
          />
          {title && (
            <Text
              as={'p'}
              padding={'.8em 0 0 0'}
              color={Color.alerzoBlack}
              weight="600"
              align={'center'}
            >
              {title}
            </Text>
          )}
          {isError ? <FallBack error title={errorMessage || ''} /> : renderSwitch()}
        </>
      )}
    </Container>
  )
}

export default TabsContentWidget

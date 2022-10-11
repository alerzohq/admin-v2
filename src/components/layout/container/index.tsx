import React, { useEffect } from 'react'
import LineLoader from '../../line-loader'
import TopBar from '../../top-bar'
import { ContainerProps } from '../type'
import { ContainerWrapper } from './styles/container.styles'

const Container: React.FC<ContainerProps> = ({
  title,
  isFetching,
  setFilterValues,
  showFilters,
  routePath,
  children,
  whiteSpace,
  noScroll,
  ...restProps
}) => {
  useEffect(() => {
    if (!noScroll) {
      window.scrollTo(0, 0)
    }
  }, [isFetching, noScroll])

  return (
    <>
      <TopBar
        title={title}
        showFilters={showFilters}
        routePath={routePath}
        setFilterValues={setFilterValues}
        whiteSpace={whiteSpace}
        {...restProps}
      />
      {isFetching ? <LineLoader /> : ''}
      <ContainerWrapper {...restProps}>{children}</ContainerWrapper>
    </>
  )
}

export default Container

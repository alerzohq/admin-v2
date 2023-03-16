import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { LineLoader } from '../..'
import { useAppContext } from '../../../context'
import { Action } from '../../../context/actions'
import { getResource } from '../../../utils/apiRequest'

import TopBar from '../../top-bar'
import { ContainerProps } from '../type'
import { ContainerWrapper } from './styles/container.styles'

const Container: React.FC<ContainerProps> = ({
  title,
  isFetching,
  setFilterValues,
  filterValue,
  showFilters,
  routePath,
  children,
  whiteSpace,
  noScroll,
  ...restProps
}) => {
  const {
    state: { fetching },
    dispatch,
  } = useAppContext()

  const getFilters = () => {
    return getResource(`filters`)
  }

  const { data } = useQuery('app-filters', getFilters, {
    staleTime: 60,
  })

  useEffect(() => {
    dispatch({ type: Action.GET_FILTERS, payload: data?.data })
  }, [data, dispatch])

  useEffect(() => {
    if (!noScroll) {
      window.scrollTo(0, 0)
    }
  }, [isFetching, fetching, noScroll])

  return (
    <>
      <TopBar
        title={title}
        showFilters={showFilters}
        routePath={routePath}
        setFilterValues={setFilterValues}
        filterValue={filterValue}
        whiteSpace={whiteSpace}
        {...restProps}
      />
      {isFetching || fetching ? <LineLoader /> : ''}
      <ContainerWrapper {...restProps}>{children}</ContainerWrapper>
    </>
  )
}

export default Container

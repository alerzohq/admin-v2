import React from 'react'
import { useQuery } from 'react-query'
import { overviewStats } from '../../../data/over-view-data'
import { getResource } from '../../../utils/apiRequest'
import BillerWidget from '../widget/biller'
import CardWidget from '../widget/card'

const OverviewContainer = () => {
  const getTranStats = () => {
    return getResource(`dashboard/statistics`)
  }

  const { isLoading: loading, data: Stats } = useQuery(
    'overview-stats',
    getTranStats
  )
  const Statistics = Stats?.data

  

  return (
    <>
      <CardWidget  statistics={overviewStats(Statistics)} loading={loading} />
      <BillerWidget />
    </>
  )
}

export default OverviewContainer

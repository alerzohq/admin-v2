import React from 'react'
import { useQuery } from 'react-query'
import { getResource } from '../../../utils/apiRequest'
import BillerWidget from '../widget/biller'
import CardWidget from '../widget/card'

const OverviewContainer = () => {

  const getTranStats = () => {
    return getResource(`transactions/statistics`)
  }

  const { isLoading: loading, data: Stats } = useQuery(
    'trans-stats',
    getTranStats)
  const Statistics = Stats?.data;


  return (
    <>
    <CardWidget stats={Statistics} loading={loading} />
    <BillerWidget />
    </>
  )
}

export default OverviewContainer
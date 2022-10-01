import React, { useEffect, useState } from 'react'
import { TopBarProps } from './type'
import Text from '../text'
import { TopbarWrapper, TopbarFilters, Filter } from './styles/topbar.styles'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowBackIcon } from '../../assets/icons'
import DateRange from '../date-range'
import Stack from '../stack'
import { SelectInputProps } from '../../@types'
import SelectInput from '../select-input'

const TopBar = ({
  title,
  showFilters,
  setFilterValues,
  routePath,
  whiteSpace,
  withParams,
}: TopBarProps) => {
  let params = useParams()
  let navigate = useNavigate()
  const [status, setStatus] = useState<SelectInputProps>(null)
  const [values, setValues] = useState({
    search: '',
    status: '',
    allPlatform: '',
  })

  const { search } = values

  useEffect(() => {
    if (showFilters && status !== null) {
      setFilterValues((prev: any) => ({ ...prev, status }))
    }
    if (showFilters) {
      setFilterValues((prev: any) => ({ ...prev, query: search }))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, status])

  return (
    <>
      <TopbarWrapper>
        <Stack justifyContent={'space-between'} direction={'row'}>
          <Stack direction={'row'} width={'auto'} alignItems={'center'}>
            {(Object.entries(params)?.length > 0 || withParams) && (
              <ArrowBackIcon
                onClick={() => {
                  routePath ? navigate(`${routePath}`) : navigate(-1)
                }}
              />
            )}{' '}
            <Text whiteSpace={whiteSpace} as={'h3'}>
              {title}
            </Text>
          </Stack>
          <TopbarFilters>
            {showFilters?.search && (
              <Filter
                value={search}
                onChange={(e) => {
                  setValues({ ...values, search: e.target.value })
                }}
                placeholder={showFilters.search.placeholder}
              />
            )}
            {showFilters?.date && <DateRange filterDate={setFilterValues} />}
            {showFilters?.selects?.length >= 1 &&
              showFilters.selects.map((select, i) => (
                <SelectInput
                  key={i}
                  placeholder={select.placeholder}
                  onChange={(e) => {
                    setStatus(e.value)
                  }}
                  value={select.value}
                  options={select.values}
                  isClearable
                />
              ))}
            {showFilters?.buttons?.length >= 1 &&
              showFilters.buttons.map((button, i) => (
                <button
                  key={i}
                  onClick={button.onClick}
                  className={'download-btn'}
                >
                  {button.label}
                </button>
              ))}
          </TopbarFilters>
          {/* {showFilters &&(
        <TopbarFilters>
        <Filter value={search} onChange={(e)=>{setValues({...values,search:e.target.value})}} placeholder={'Search by reference number..'}/>
        <DateRange filterDate={setFilterValues}/>
        <SelectInput placeholder={'All Platform'}
          onChange={()=>{}}
         value={''} options={optionsAllPlatform}/> 
         <SelectInput placeholder={'Status'}
          onChange={handleChange}
         value={status} options={options}/> 
         
         <button id={'download-btn'}>
           {'Download CSV'}
         </button>
        </TopbarFilters>
 
       )} */}
        </Stack>
      </TopbarWrapper>
    </>
  )
}

export default TopBar

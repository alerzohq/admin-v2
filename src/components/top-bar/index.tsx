import React, { useEffect, useRef, useState } from 'react'
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
  const [newObj, setnewObj] = useState({})
  const [status, setStatus] = useState<SelectInputProps>(null)
  const [values, setValues] = useState({
    search: '',
    status: '',
    biller: '',
    product: '',
    allPlatform: '',
  })

  const { search } = values
  const ref = useRef<HTMLDivElement>(null)
  const rectVal = ref?.current?.getBoundingClientRect()?.left
  const position = rectVal && rectVal >= 600 && '20px'

  useEffect(() => {
    if (showFilters && status !== null) {
      return setFilterValues((prev: any) => ({ ...prev, status }))
    }
    if (showFilters) {
      setFilterValues((prev: any) => ({ ...prev, query: search }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, status])

  useEffect(() => {
    if (Object.keys(newObj).length > 0) {
      setFilterValues((prev: any) => ({ ...prev, ...newObj }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newObj])
  return (
    <>
      <TopbarWrapper>
        <Stack justifyContent={'space-between'} direction={'row'}>
          <Stack direction={'row'} width={'auto'} alignItems={'center'}>
            {(Object.entries(params)?.length > 0 || withParams) && (
              <ArrowBackIcon
                onClick={() => {
                  routePath
                    ? typeof routePath === 'function'
                      ? navigate(`${routePath()}`, { replace: true })
                      : navigate(`${routePath}`)
                    : navigate(-1)
                }}
              />
            )}
            <Text whiteSpace={whiteSpace} as={'h3'}>
              {title}
            </Text>
          </Stack>
          <TopbarFilters>
            {showFilters?.search && (
              <Filter
                maxWidth="150px"
                value={search}
                onChange={(e) => {
                  setValues({ ...values, search: e.target.value })
                }}
                placeholder={showFilters.search.placeholder}
              />
            )}

            {showFilters?.date && (
              <div ref={ref}>
                <DateRange right={position} filterDate={setFilterValues} />
              </div>
            )}
            {showFilters?.selects?.length >= 1 &&
              showFilters.selects.map((select, i) => {
                return (
                  <SelectInput
                    key={i}
                    maxWidth="150px"
                    placeholder={select.placeholder}
                    styles={select?.styles}
                    isSearchable={select?.isSearchable}
                    onChange={
                      select?.action
                        ? (e) => select.onChange(e)
                        : (e, a) => {
                            if (select.shouldSetQuery) {
                              return setFilterValues((prev: any) => ({
                                ...prev,
                                query: e?.value,
                              }))
                            }
                            if (select?.searchQuery) {
                              const key: string = select?.searchQuery
                              const dataObj: any = {}
                              dataObj[key] = e?.value.toString() || ''
                              const ne = { ...newObj, ...dataObj }
                              return setnewObj(ne)
                            }
                            setStatus(e?.value)
                          }
                    }
                    hideValue={select.hideValue}
                    value={select.value}
                    options={select.values}
                    isClearable={
                      select.isClearable === true ||
                      select.isClearable === false
                        ? select.isClearable
                        : true
                    }
                  />
                )
              })}
            {showFilters?.buttons?.length >= 1 &&
              showFilters.buttons.map((button, i) => (
                <button
                  key={i}
                  onClick={button.onClick}
                  className={button?.buttonClass || 'download-btn'}
                >
                  {button.label}
                </button>
              ))}
          </TopbarFilters>
        </Stack>
      </TopbarWrapper>
    </>
  )
}

export default TopBar

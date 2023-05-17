import { Document } from 'react-pdf'
import { Stack } from '../../../../../components'

export const DocFile = ({
  doc,
  docType,
  isPdf,
}: {
  doc: [] | string
  docType: string
  isPdf: boolean
}) => {
  return (
    <>
      {Array.isArray(doc) ? (
        <>
          {doc?.map((value: string, i: number) => (
            <Stack key={i} padding=".5rem 0">
              {value && <img width="100%" alt={docType} src={value} />}
            </Stack>
          ))}
        </>
      ) : (
        <>
          {isPdf ? (
            <Document file={doc} />
          ) : (
            <img width="100%" alt={docType} src={doc} />
          )}
        </>
      )}
    </>
  )
}

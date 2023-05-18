import { Stack, PDFViewer } from '../../../../../components'
import { checkPdfUrl } from '../../../../../utils/formatValue'

export const DocFile = ({
  doc,
  docType,
}: {
  doc: [] | string
  docType: string
}) => {
  let isPdf = true
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
          {doc && checkPdfUrl(doc) ? (
            <PDFViewer url={doc} />
          ) : (
            <img width="100%" alt={docType} src={doc} />
          )}
        </>
      )}
    </>
  )
}

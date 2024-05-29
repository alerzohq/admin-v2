import { Color } from '../../assets/theme'
import { PolicyWrapper, PolicyInner } from './styles/cbn-policy.styles'

const CBNPolicy = () => {
  return (
    <PolicyWrapper>
      <PolicyInner>
        <span>Veedez Payment</span> service is powered by{' '}
        <span>Shago Payments Limited;</span> an entity fully licensed and
        regulated by the <span>Central Bank of Nigeria</span>. Banking services
        are backed by <span>Kopo Kope Microfinance Bank</span> and all deposits
        are insured by the{' '}
        <span style={{ color: Color.alerzoGrayishBlue2, fontWeight: 600 }}>
          NDIC
        </span>
        .
      </PolicyInner>
    </PolicyWrapper>
  )
}

export default CBNPolicy

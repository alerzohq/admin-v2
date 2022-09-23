import { useNavigate } from 'react-router-dom'

const DigitalBank = () => {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      onClick={() => navigate('835dae93-8521-44f6-ab26-5476813a59fc')}
    >
      digital bank
    </button>
  )
}

export default DigitalBank

import { useNavigate } from 'react-router-dom'

const Terminals = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Teminals</div>
      <button
        type="button"
        onClick={() => {
          navigate('02aae9f9-c692-41aa-803d-3c0c0d3fc9e2')
        }}
      >
        Navigate
      </button>
    </>
  )
}

export default Terminals

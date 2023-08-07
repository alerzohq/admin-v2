import { CheckboxContainer } from './styles/checkbox.styles'

const Checkbox = ({
  name,
  value,
  onClick,
  checked,
  label,
  position
}: {
  name?: string
  value?: string | number
  onClick: (value: string) => void
  checked: boolean
  label?:string
  position?:'relative'
}) => {
  return (
    <>
      <CheckboxContainer position={position}>
        <input
          className="checkbox"
          type="checkbox"
          name={name}
          value={value}
          id={String(value)}
          onClick={(e) => onClick((e.target as HTMLInputElement)?.value)}
          defaultChecked={checked}
        />
        <span className="checkmark" />
        <small>{label}</small>
      </CheckboxContainer>
    </>
  )
}

export default Checkbox

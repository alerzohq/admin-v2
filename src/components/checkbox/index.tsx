import { CheckboxContainer } from './checkbox.styles'

const Checkbox = ({
  name,
  value,
  onClick,
  checked,
}: {
  name: string
  value: string | number
  onClick: (value: string) => void
  checked: boolean
}) => {
  return (
    <>
      <CheckboxContainer>
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
      </CheckboxContainer>
    </>
  )
}

export default Checkbox

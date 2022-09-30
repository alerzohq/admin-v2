import {
  StylesConfig,
  CSSObjectWithLabel,
  ControlProps,
  GroupBase,
} from 'react-select'
import { Color } from '../../../assets/theme'

type selectStyleProps = {
  isFocused?: boolean
}
type Coptions = {}

export const colourStyles: StylesConfig<Coptions> = {
  control: (
    styles?: CSSObjectWithLabel,
    state?: ControlProps<Coptions, boolean, GroupBase<Coptions>>
  ) => ({
    ...styles,
    border: state?.isFocused
      ? `1px solid ${Color.alerzoLightGray}`
      : `1px solid ${Color.alerzoLightGray}`,
    height: 45,
    width: 200,
    borderRadius: 7,
    fontSize: 14,
    boxShadow: Color.alerzoDarkGray,
    '&:hover': {
      border: `1px solid ${Color.alerzoLightGray} !important`,
    },
  }),
  placeholder: (defaultStyles, { isFocused }: selectStyleProps) => {
    return {
        ...defaultStyles,
        fontSize: '.8rem',
        color: isFocused ? `${Color.alerzoWhite}` : `${Color.alerzoDarkGray}`,
    }
},
  option: (styles, { isFocused }: selectStyleProps) => {
    return {
      ...styles,
      backgroundColor: isFocused
        ? `${Color.alerzoDarkGray}`
        : `${Color.alerzoWhite}`,
      color: isFocused ? `${Color.alerzoWhite}` : ``,
      borderBottom: `1px solid ${Color.alerzoLightGray}`,
      fontSize: 14,
      '&:last-child': {
        border: 'none',
      },
    }
  },
}
export const blueColorStyles: StylesConfig<Coptions> = {
  control: (
    styles?: CSSObjectWithLabel,
    state?: ControlProps<Coptions, boolean, GroupBase<Coptions>>
  ) => ({
    ...styles,
    border: state?.isFocused
      ? 'none'
      : `1px solid ${Color.alerzoBlueBorder}`,
      height: 30,
      minHeight: 30,
    borderRadius: 3,
    backgroundColor:state?.isFocused
    ? `${Color.alerzoBlue8}`
    : `${Color.alerzoBlue7}`,
    color:state?.isFocused
    ? `${Color.alerzoWhite}`
    : `${Color.alerzoBlue6}`,
    fontSize: 12,
    
  }),
  placeholder: (defaultStyles, { isFocused }: selectStyleProps) => {
    return {
        ...defaultStyles,
        fontSize: '0.75rem',
        color: isFocused ? `${Color.alerzoWhite}` : `${Color.alerzoBlue6}`,
    }
},
  option: (styles, { isFocused }: selectStyleProps) => {
    return {
      ...styles,
      backgroundColor: isFocused
        ? `${Color.alerzoLightBlue2}`
        : `${Color.alerzoWhite}`,
      color: isFocused ? `${Color.alerzoBlue6}` : `${Color.alerzoBlack}`,
      borderBottom: `1px solid ${Color.alerzoBlue6}`,
      fontSize: 12,
      '&:last-child': {
        border: 'none',
      },
    }
  },
  menu: (provided, state) => ({
    ...provided,
    color: 'green',
  }),
  dropdownIndicator:(defaultStyles, { isFocused }: selectStyleProps) => {
    return {
        ...defaultStyles,
        padding: '0',
        color: isFocused ? `${Color.alerzoWhite}` : `${Color.alerzoBlue6}`,
    }
},
}
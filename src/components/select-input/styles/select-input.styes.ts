import { CSSObjectWithLabel, ControlProps, GroupBase } from 'react-select'
import { Color } from '../../../assets/theme'

type selectStyleProps = {
  isFocused?: boolean
}
type Coptions = {}
export const selectStyles = (
  isBlue?: boolean,
  fullWidth?: boolean,
  maxWidth?: string,
  isBlueBackground?: boolean
) => {
  return isBlue
    ? {
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
          backgroundColor: state?.isFocused
            ? `${Color.alerzoBlue8}`
            : `${Color.alerzoBlue7}`,
          color: state?.isFocused
            ? `${Color.alerzoGray}`
            : `${Color.alerzoBlue6}`,
          fontSize: 12,
        }),
        placeholder: (
          defaultStyles: CSSObjectWithLabel,
          { isFocused }: selectStyleProps
        ) => {
          return {
            ...defaultStyles,
            fontSize: '0.75rem',
            color: isFocused ? `${Color.alerzoWhite}` : `${Color.alerzoBlue6}`,
          }
        },
        option: (
          styles: CSSObjectWithLabel,
          { isFocused }: selectStyleProps
        ) => {
          return {
            ...styles,
            backgroundColor: `${Color.alerzoWhite}`,
            color: `${Color.alerzoBlack}`,
            borderBottom: `1px solid ${Color.alerzoGray}`,
            fontSize: 12,
            '&:last-child': {
              border: 'none',
            },
          }
        },
        dropdownIndicator: (
          defaultStyles: CSSObjectWithLabel,
          { isFocused }: selectStyleProps
        ) => {
          return {
            ...defaultStyles,
            padding: '0',
            color: isFocused ? `${Color.alerzoGray}` : `${Color.alerzoBlue6}`,
          }
        },
        groupHeading: () => {
          return {
            color: `${Color.alerzoBlue6}`,
            backgroundColor: `${Color.alerzoLightBlue2}`,
            fontSize: 12,
            padding: '.9rem .6rem',
          }
        },
        menuList: (provided: CSSObjectWithLabel) => ({
          ...provided,
          paddingTop: 0,
          marginTop: 0,
        }),
        group: (provided: CSSObjectWithLabel) => ({
          ...provided,
          paddingTop: 0,
          marginTop: 0,
        }),
      }
    : {
        container: (styles?: CSSObjectWithLabel) => ({
          ...styles,
          width: fullWidth ? '100%' : 'auto',
        }),
        control: (
          styles?: CSSObjectWithLabel,
          state?: ControlProps<Coptions, boolean, GroupBase<Coptions>>
        ) => ({
          ...styles,
          border: isBlueBackground
            ? `1px solid ${Color.alerzoBlue}`
            : state?.isFocused
            ? `1px solid ${Color.alerzoLightGray}`
            : `1px solid ${Color.alerzoLightGray}`,
          height: 45,
          width: fullWidth ? '100%' : 200,
          maxWidth: maxWidth,
          borderRadius: 10,
          backgroundColor:
            isBlueBackground && !state?.isFocused
              ? `${Color.alerzoBlue}`
              : 'transparent',

          fontSize: 14,
          boxShadow: Color.alerzoDarkGray,
          '&:hover': {
            border: `1px solid ${Color.alerzoLightGray} !important`,
          },
        }),
        placeholder: (
          defaultStyles: CSSObjectWithLabel,
          { isFocused }: selectStyleProps
        ) => {
          return {
            ...defaultStyles,
            fontSize: '.8rem',
            fontWeight: isBlueBackground ? '600' : '500',
            color: isBlueBackground
              ? isFocused
                ? `${Color.alerzoBlue}`
                : `${Color.alerzoWhite}`
              : isFocused
              ? `${Color.alerzoWhite}`
              : `${Color.alerzoDarkGray}`,
          }
        },
        dropdownIndicator: (
          defaultStyles: CSSObjectWithLabel,
          { isFocused }: selectStyleProps
        ) => {
          return {
            ...defaultStyles,
            color: isBlueBackground
              ? isFocused
                ? `${Color.alerzoBlue}`
                : `${Color.alerzoWhite}`
              : '',
          }
        },
        option: (
          styles: CSSObjectWithLabel,
          { isFocused }: selectStyleProps
        ) => {
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
}

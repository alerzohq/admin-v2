
import {
  StylesConfig,
  CSSObjectWithLabel,
  ControlProps,
  GroupBase,
} from "react-select";
import { Color } from "../../../assets/theme";


type selectStyleProps = {
  isFocused?: boolean;
};
type Coptions = {
};


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
    width:200,
    borderRadius: 7,
    fontSize:14,
    boxShadow:Color.alerzoDarkGray,
    "&:hover": {
      border: `1px solid ${Color.alerzoLightGray} !important`,
    },
  }),

  option: (styles, { isFocused }: selectStyleProps) => {
    return {
      ...styles,
      backgroundColor: isFocused ? `${Color.alerzoDarkGray}` : `${Color.alerzoWhite}`,
      color: isFocused ? `${Color.alerzoWhite}` : ``,
      borderBottom: `1px solid ${Color.alerzoLightGray}`,
      fontSize:14,
      "&:last-child": {
        border: "none",
      },
    };
  },
};

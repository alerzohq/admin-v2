
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
      ? `1px solid rgba(193, 202, 207, 0.5)`
      : `1px solid rgba(193, 202, 207, 0.5);`,
    height: 45,
    width:200,
    borderRadius: 7,
    boxShadow:Color.alerzoDarkGray,
    "&:hover": {
      border: `1px solid rgba(193, 202, 207, 0.5) !important`,
    },
  }),

  option: (styles, { isFocused }: selectStyleProps) => {
    return {
      ...styles,
      backgroundColor: isFocused ? `${Color.alerzoBlue}` : `${Color.alerzoWhite}`,
      color: isFocused ? `${Color.alerzoWhite}` : ``,
      borderBottom: `1px solid ${Color.alerzoDarkGray}`,
      "&:last-child": {
        border: "none",
      },
    };
  },
};

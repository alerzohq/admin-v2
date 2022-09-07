import { Color } from "../assets/theme"

export const resolveColor = (status) => {
    if (status === "successful") {
        return {
            textColor: Color.alerzoTableSuccess,
            bgColor: Color.alerzoTableSuccessBg,
        }
    } else if (status === "failed") {
        return {
            textColor: Color.alerzoDanger,
            bgColor: Color.alerzoErrorBg,
        }
    } else  {
        return {
            textColor: Color.alerzoWarningText,
            bgColor: Color.alerzoWarningBg,
        }
    }

}
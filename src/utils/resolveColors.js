import { Color } from "../assets/theme"


export const resolveTableColor = (status) => {
    if (status === "successful") {
        return {
            textColor: Color.alerzoTableSuccess,
            bgColor: Color.alerzoStatusSuccess,
        }
    } else if (status === "failed") {
        return {
            textColor: Color.alerzoDanger,
            bgColor: Color.alerzoStatusFailed,
        }
    } else  {
        return {
            textColor: Color.alerzoWarningText,
            bgColor: Color.alerzoWarningBg,
        }
    }

}
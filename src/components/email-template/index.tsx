import { AlerzoLogo } from "../../assets/icons";
import OtpSvg from "../../assets/images/svgs/OtpIcon";
import { Color } from "../../assets/theme";
import Text from "../text";
import { FooterText, MessageBody, TemplateBody, TemplateCard, TemplateFooter, TemplateHeader } from "./styles/email-template.styles";

const EmailTemplate = () => {
    return (
            <TemplateBody>
                <TemplateHeader>
                    <AlerzoLogo
                        className={'logo'}
                        onClick={() => { }}
                        height={'25'}
                        width={'150'}
                        color={Color.alerzoBlue}
                    />
                </TemplateHeader>
                <TemplateCard>
                    <OtpSvg />
                    <Text
                        as={'p'}
                        align={'center'}
                        weight={'600'}
                        size={'29px'}
                        padding={".5rem 0"}
                        color={Color.alerzoDarkGray}
                    >
                        One Time Password (OTP)
                    </Text >
                </TemplateCard>
                <MessageBody>
                    <Text
                        as={'p'}
                        align={'center'}
                        weight={'600'}
                        size={'14px'}
                        color={Color.alerzoDarkGray}
                    >
                        Dear Amina Nuhu,
                    </Text >
                    <Text
                        as={'p'}
                        align={'center'}
                        weight={'400'}
                        size={'14px'}
                        color={Color.alerzoDarkGray}
                    >
                        Please use the OTP below to complete your login:
                    </Text >
                    <Text
                        as={'p'}
                        align={'center'}
                        weight={'600'}
                        size={'28px'}
                        margin={"2rem 0"}
                        color={Color.alerzoBlue}
                    >
                        891028
                    </Text >
                    <Text
                        as={'p'}
                        align={'center'}
                        weight={'400'}
                        size={'12px'}
                        color={Color.alerzoDarkGray}
                    >
                        *Please dont share this code with anyone*
                    </Text >

                </MessageBody>
                <TemplateFooter>
                    <FooterText>
                        <Text
                            as={'div'}
                            align={'center'}
                            weight={'400'}
                            size={'12px'}
                            padding="0"
                            margin="0"
                            color={Color.alerzoLightGray5}
                        >
                            Powered by:
                        </Text >
                        <Text
                            as={'div'}
                            align={'center'}
                            weight={'600'}
                            size={'12px'}
                            padding="0"
                            margin="0"
                            color={Color.alerzoDarkGray}
                        >
                            Alerzo
                        </Text >
                    </FooterText>
                    <Text
                        as={'p'}
                        align={'center'}
                        weight={'400'}
                        size={'12px'}
                        color={Color.alerzoDarkGray}
                    >
                        39, Adeola Odeku Street, Victoria Island, Lagos, Nigeria
                    </Text >
                </TemplateFooter>
            </TemplateBody>
    )
}
export default EmailTemplate;
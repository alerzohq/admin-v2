import { useState } from 'react';
import { AccordionBody,AccordionContainer, AccordionItem,  AccordionTitle, } from './styles/accordion.styles';
import { IconContext } from 'react-icons';
import { Color } from '../../assets/theme';
import { AccordionProps, DataProps } from './type';
import Stack from '../stack';
import Text from '../text';
import { ArrowUpIcon } from '../../assets/icons';

export const Accordion = ({ data }: AccordionProps) => {
    const [show, setShow] = useState<number | null>();

    const toggle = (index: number) => {
      if (show === index) {
        return setShow(null);
      }
      setShow(index);
    };
    return(
<IconContext.Provider value={{ color: Color.alerzoGray, size: '25px' }}>
    <AccordionContainer>
      {data.map((data: DataProps, index: number) => (
        <AccordionItem key={index}>
          <AccordionTitle
            onClick={() => toggle(index)}
            key={index}
            isShown={show === index}
          >
            <Stack
              width='auto'
              direction='row'
              align='center'
              gap='20px'
            >
             <Text as='h4'>{data?.title}</Text>
            </Stack>
            <ArrowUpIcon />
          </AccordionTitle>
          <AccordionBody isShown={show === index}>{data?.component}</AccordionBody>
        </AccordionItem>
      ))}
    </AccordionContainer>
  </IconContext.Provider>)
};

export default Accordion;

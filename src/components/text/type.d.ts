
//Polymorphic

type TextOwnProps<E extends React.ElementType>= {
    color?:string,
    size?: string,
    weight?: string,
    padding?:string,
    width?:string,
    align?:string,
    children:React.ReactNode,
    opacity?:string;
    bgColor?:string,
    margin?:string,
    cursor?:string,
    radius?:string,
    textAlign?: string,
    whiteSpace?: string,
    as?:E,

}

export type TextProps<E extends React.ElementType>= TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>
export type CardContainerProps = {
    children: React.ReactNode;

}

export type CardRowProps = {
    children?: React.Node;
    data: CardData[],

}
type CardData = {
    name: string;
    review: string;
    imageUrl: string;
    date?: string;
}
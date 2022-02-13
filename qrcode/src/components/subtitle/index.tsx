import { Container } from "./styles"

interface ISubtitle {
    subtitle: string;
}

export const Subtitle = ({subtitle}: ISubtitle) => {
    return (
        <>
        <Container>
            <h4>{subtitle}</h4>
        </Container> 
        </>
    )
}
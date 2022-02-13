import { Container } from "./styles"

interface ITitle {
  title: string;
}


export const Title = ({title}: ITitle) => {
    return (
        <>
          <Container>
            <h3>{title}</h3>
          </Container>
        </>
    )
}
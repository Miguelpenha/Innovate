import { Container, Options, ContainerOption, Option, ButtonContact } from './style'

function Nav() {
    return (
        <Container>
            <Options className="options">
                <ContainerOption>
                    <Option href="#showcase">Showcase</Option>
                </ContainerOption>
                <ContainerOption>
                    <Option href="#pricing">Pricing</Option>
                </ContainerOption>
                <ContainerOption>
                    <Option href="#contact">Contact</Option>
                </ContainerOption>
            </Options>
            <ButtonContact className="button" href="#form">Fale Conosco</ButtonContact>
        </Container>
    )
}

export default Nav
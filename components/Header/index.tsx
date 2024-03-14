import useAnimation from './useAnimation'
import { Container, Logo } from './style'
import logoSource from '../../public/img/Logo Innovate.png'

function Header() {
    useAnimation()

    return (
        <Container id="header">
            <Logo src={logoSource} priority alt="Logo Innovate" placeholder="blur"/>
        </Container>
    )
}

export default Header
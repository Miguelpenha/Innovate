import useAnimation from './useAnimation'
import { Container, Logo } from './style'
import logoSource from '../../public/img/Logo Innovate.png'
import Nav from './Nav'

function Header() {
    useAnimation()

    return (
        <Container id="header">
            <Logo src={logoSource} priority alt="Logo Innovate" placeholder="blur"/>
            <Nav/>
        </Container>
    )
}

export default Header
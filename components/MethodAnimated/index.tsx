import useAnimation from './useAnimation'
import { Container, Logo, Text } from './style'

function MethodAnimated() {
    useAnimation()

    return (
        <Container id="method-animated">
            <Logo id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 112">
                <g>
                    <path d="M88.3953 99.76L90.0753 65.2L78.5553 97.84L71.8353 95.2L86.7153 63.76L63.6753 89.68L58.3953 84.4L84.3153 61.36L52.8753 76.24L50.2353 69.52L82.8753 58L48.3153 59.68V52.48L82.8753 54.4L50.2353 42.64L52.8753 36.16L84.3153 51.04L58.3953 27.76L63.6753 22.72L86.7153 48.4L71.8353 17.2L78.5553 14.32L90.0753 47.2L88.3953 12.4H95.5953L93.6753 46.96L105.435 14.32L111.915 17.2L97.0353 48.4L120.315 22.72L125.355 27.76L99.6753 51.04L130.875 36.16L133.755 42.64L100.875 54.4L135.675 52.48V59.68L100.875 58L133.755 69.52L130.875 76.24L99.6753 61.36L125.355 84.4L120.315 89.68L97.0353 63.76L111.915 95.2L105.435 97.84L93.6753 65.2L95.5953 99.76H88.3953Z"/>
                </g>
            </Logo>
            <Text className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugiat commodi officia</Text>
            <Text className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ipsa unde obcaecati nobis</Text>
            <Text className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur reiciendis tenetur maiores nam.</Text>
        </Container>
    )
}

export default MethodAnimated
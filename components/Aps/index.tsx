import useAnimation from './useAnimation'
import { Container } from './style'
import aps from './aps'
import Ap from './Ap'

function Aps() {
    useAnimation()

    return (
        <Container id="aps">
            {aps.map((ap, index) => (
                <Ap key={index} ap={ap} index={index}/>
            ))}
        </Container>
    )
}

export default Aps
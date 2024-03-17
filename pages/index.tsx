import GTMTag from '../components/GTMTag'
import Head from '../components/Head'
import { Container } from '../styles/pages'
import TitleAnimated from '../components/TitleAnimated'
import MethodAnimated from '../components/MethodAnimated'
import Aps from '../components/Aps'
import Header from '../components/Header'

function Home() {
    return <>
        {/* <GTMTag/> */}
        <Head/>
        <Header/>
        <Container>
            <TitleAnimated/>
            <MethodAnimated/>
            <Aps/>
        </Container>
    </>
}

export default Home
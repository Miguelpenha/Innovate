import GTMTag from '../components/GTMTag'
import Head from '../components/Head'
import { Container } from '../styles/pages'
import Aps from '../components/Aps'
import Header from '../components/Header'

function Home() {
    return <>
        {/* <GTMTag/> */}
        <Head/>
        <Header/>
        <Container>
            <Aps/>
        </Container>
    </>
}

export default Home
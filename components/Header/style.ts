import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.header`
    top: -20%;
    left: 50%;
    opacity: 0;
    width: 14em;
    z-index: 10;
    display: flex;
    position: fixed;
    padding: 1em 1.5em;
    align-items: center;
    border-radius: 25px;
    flex-direction: row;
    transform: translateX(-50%);
    backdrop-filter: saturate(150%) blur(20px);
`

export const Logo = styled(Image)`
    width: 10em;
    height: auto;

    @media screen and (max-width: 900px) {
        width: 8em;
    }
`
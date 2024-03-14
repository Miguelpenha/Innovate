import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.header`
    top: -20%;
    left: 50%;
    opacity: 0;
    width: 14em;
    z-index: 10;
    padding: 2em;
    display: flex;
    position: fixed;
    border-radius: 25px;
    align-items: center;
    backdrop-filter: blur(50px);
    transform: translateX(-50%);
    background-color: transparent;
`

export const Logo = styled(Image)`
    width: 10em;
    height: auto;
`
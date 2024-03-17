import styled from 'styled-components'

export const Container = styled.div`
    width: 60%;
    display: flex;
    margin-top: 18em;
    align-self: center;
    position: relative;
    transform: translateX(0);
`

export const Title = styled.h1`
    width: 100%;
    color: #2b2c32;
    font-size: 3em;
    text-align: center;
    align-self: center;

    @media screen and (max-width: 526px) {
        font-size: 2em;
    }
`

export const ContainerLogo = styled.div`
    right: 0%;
    bottom: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    border-radius: 10px;
    backdrop-filter: saturate(150%) blur(8px);
`

export const Logo = styled.svg`
    width: 6em;
    height: 6em;
    fill: #2b2c32;
    margin-top: auto;
    margin-bottom: auto;
    transform: translateX(-25px);

    @media screen and (max-width: 875px) {
        margin-top: 0%;
        align-self: center;
        position: absolute;
        transform: translateX(0px);
        transform: translateY(-20px);
    }
`
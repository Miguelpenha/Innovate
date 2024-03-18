import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-top: 12em;
    overflow: hidden;
    filter: blur(8px);
    position: relative;
    padding-bottom: 3em;
    flex-direction: column;
    background-color: #d9dfe5;
    transform: translateY(50px);

    @media screen and (max-width: 593px) {
        margin-top: 5em;
    }

    @media screen and (max-width: 891px) and (min-width: 593px) {
        margin-top: 8em;
    }
`

export const Logo = styled.svg`
    left: -1%;
    width: 10em;
    bottom: 85%;
    fill: #2b2c32;
    position: absolute;

    @media screen and (max-width: 400px) {
        bottom: 90%;
    }
`

export const Text = styled.div`
    color: #2b2c32;
    margin-top: 2em;
    font-size: 1.5em;
    margin-left: 6em;
    margin-bottom: 5em;
    margin-right: 0.5em;
`
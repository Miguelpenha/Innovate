import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.nav`
    width: 100%;
    display: flex;
    margin-left: 4em;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 400px) {
        margin-left: 1em;
    }

    @media screen and (max-width: 950px) and (min-width: 400px) {
        margin-left: 2em;
    }
`

export const Options = styled.ul`
    gap: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media screen and (max-width: 840px) {
        display: none;
    }
`

export const ContainerOption = styled.li`
    opacity: 0;
    list-style: none;
    transform: translateX(-50px);
`

export const Option = styled(Link)`
    display: flex;
    font-size: 1.2em;
    font-weight: bold;
    border-radius: 15px;
    padding: 0.7em 0.8em;
    text-decoration: none;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.tertiaryColor};

    :hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
    }
`

export const ButtonContact = styled(Link)`
    opacity: 0;
    margin: auto;
    display: flex;
    margin-right: 0%;
    font-size: 1.2em;
    font-weight: bold;
    transform: scale(1);
    border-radius: 30px;
    white-space: nowrap;
    padding: 0.7em 1.2em;
    text-decoration: none;
    background-color: #295763;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.secondaryColor};

    :hover {
        background-color: rgba(41, 87, 99, 0.8);
        box-shadow: rgba(41, 87, 99, 0.4) 0px 5px 15px;
    }

    @media screen and (max-width: 840px) {
        font-size: 1em;
        padding: 0.7em;
    }
`
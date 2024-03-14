import styled from 'styled-components'
import Image from 'next/image'

interface IContainer {
    $height?: boolean
}

export const Container = styled.div<IContainer>`
    width: 15em;
    cursor: pointer;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
    height: ${props => props.$height ? 35 : 25}em;

    @media screen and (max-width: 1010px) {
        height: 25em;
    }

    :hover {
        img {
            transform: scale(1.1);
            filter: brightness(0.8);
        }
    }
`

export const Content = styled.div`
    z-index: 1;
    width: 100%;
    padding: 1em;
    height: 100%;
    display: flex;
    position: absolute;
`

export const IconHand = styled.svg`
    top: 5%;
    left: auto;
    opacity: 0;
    width: 1.5em;
    position: absolute;
    transform: scale(0);
    fill: ${props => props.theme.secondaryColor};
`

export const Title = styled.h3`
    opacity: 0;
    margin-top: 1em;
    font-size: 1.5em;
    align-self: center;
    transform: translateY(-50px);
    color: ${props => props.theme.secondaryColor};
`

export const Description = styled.div`
    opacity: 0;
    margin: auto;
    font-size: 1.2em;
    margin-bottom: 10%;
    transform: scale(0.85);
    color: ${props => props.theme.secondaryColor};
`

export const Footer = styled.div`
    opacity: 0;
    display: flex;
    padding: 0.5em;
    min-height: 2.8em;
    border-radius: 10px;
    backdrop-filter: blur(8px);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
`

export const Stars = styled.div`
    gap: 0.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

interface IStar {
    filled?: boolean
}

export const Star = styled.svg<IStar>`
    opacity: 0;
    width: 1.8em;
    transform: translateX(-20px);
    fill: ${props => props.filled ? '#f7ea1f' : '#FFFFFF'};
`

export const Features = styled.div`
    gap: 0.5em;
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: space-evenly;
`

export const IconFeature = styled.svg`
    opacity: 0;
    width: 1.8em;
    top: 45%;
    transform: translateY(55%);
    fill: ${props => props.theme.secondaryColor};
`

export const ApImage = styled(Image)`
    width: 100%;
    height: 100%;
    transition-duration: 0.25s;
    transition-timing-function: linear;
`
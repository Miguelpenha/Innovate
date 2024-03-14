import type { IAp } from '../aps'
import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Content, IconHand, Title, Description, Footer, Stars, Star, Features, IconFeature, ApImage } from './style'

interface IProps {
    ap: IAp
    index: number
}

const Ap: FC<IProps> = ({ ap, index }) => {
    const { handleMouseEnter, handleMouseLeave } = useAnimation(index)

    return (
        <Container
            className="ap"
            $height={ap.height}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Content className="content">
                <IconHand className="hand" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                    <g>
                        <rect fill="none" height="24" width="24" x="0"/>
                    </g>
                    <g>
                        <g>
                            <g>
                                <path d="M9,11.24V7.5C9,6.12,10.12,5,11.5,5S14,6.12,14,7.5v3.74c1.21-0.81,2-2.18,2-3.74C16,5.01,13.99,3,11.5,3S7,5.01,7,7.5 C7,9.06,7.79,10.43,9,11.24z M18.84,15.87l-4.54-2.26c-0.17-0.07-0.35-0.11-0.54-0.11H13v-6C13,6.67,12.33,6,11.5,6 S10,6.67,10,7.5v10.74c-3.6-0.76-3.54-0.75-3.67-0.75c-0.31,0-0.59,0.13-0.79,0.33l-0.79,0.8l4.94,4.94 C9.96,23.83,10.34,24,10.75,24h6.79c0.75,0,1.33-0.55,1.44-1.28l0.75-5.27c0.01-0.07,0.02-0.14,0.02-0.2 C19.75,16.63,19.37,16.09,18.84,15.87z"/>
                            </g>
                        </g>
                    </g>
                </IconHand>
                <Title className="title">{ap.title}</Title>
                <Description className="description">{ap.description}</Description>
                <Footer className="footer">
                    <Features className="features">
                        <IconFeature className="feature" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"/>
                        </IconFeature>
                        <IconFeature className="feature" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                        </IconFeature>
                        <IconFeature className="feature" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                            <g>
                                <rect fill="none" height="24" width="24"/>
                            </g>
                            <g>
                                <polygon points="17,12 19,12 12,2 5.05,12 7,12 3.1,18 10.02,18 10.02,22 13.98,22 13.98,18 21,18"/>
                            </g>
                        </IconFeature>
                        <IconFeature className="feature" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                        </IconFeature>
                        <IconFeature className="feature" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="4.5" cy="9.5" r="2.5"/>
                            <circle cx="9" cy="5.5" r="2.5"/>
                            <circle cx="15" cy="5.5" r="2.5"/>
                            <circle cx="19.5" cy="9.5" r="2.5"/>
                            <path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/>
                        </IconFeature>
                    </Features>
                    <Stars className="stars">
                        <Star className="star" filled xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                            <g>
                                <rect fill="none" height="24" width="24" x="0"/>
                                <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/>
                            </g>
                        </Star>
                        <Star className="star" filled xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                            <g>
                                <rect fill="none" height="24" width="24" x="0"/>
                                <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/>
                            </g>
                        </Star>
                        <Star className="star" filled xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                            <g>
                                <rect fill="none" height="24" width="24" x="0"/>
                                <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/>
                            </g>
                        </Star>
                        <Star className="star" filled xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                            <g>
                                <rect fill="none" height="24" width="24" x="0"/>
                                <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/>
                            </g>
                        </Star>
                        <Star className="star" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                            <g>
                                <rect fill="none" height="24" width="24" x="0"/>
                                <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/>
                            </g>
                        </Star>
                    </Stars>
                </Footer>
            </Content>
            <ApImage src={ap.image.src} alt={ap.image.alt}/>
        </Container>
    )
}

export default Ap
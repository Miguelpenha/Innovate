import { StaticImageData } from 'next/image'
import apImageSource from '../../public/img/ap.jpg'

interface IAp {
    title: string
    height: boolean
    description: string
    image: {
        alt: string
        src: StaticImageData
    }
}

const aps: IAp[] = [
    {
        height: true,
        title: 'Prédio tal tal 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada nulla. Nulla ullamcorper massa ante, in feugiat metus maximus in. Maecenas ut sodales est. Duis eget commodo ligula.',
        image: {
            alt: 'Ap Image',
            src: apImageSource
        }
    },
    {
        height: false,
        title: 'Prédio tal tal 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada nulla. Nulla ullamcorper massa ante, in feugiat metus maximus in. Maecenas ut sodales est. Duis eget commodo ligula.',
        image: {
            alt: 'Ap Image',
            src: apImageSource
        }
    },
    {
        height: true,
        title: 'Prédio tal tal 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada nulla. Nulla ullamcorper massa ante, in feugiat metus maximus in. Maecenas ut sodales est. Duis eget commodo ligula.',
        image: {
            alt: 'Ap Image',
            src: apImageSource
        }
    },
    {
        height: false,
        title: 'Prédio tal tal 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada nulla. Nulla ullamcorper massa ante, in feugiat metus maximus in. Maecenas ut sodales est. Duis eget commodo ligula.',
        image: {
            alt: 'Ap Image',
            src: apImageSource
        }
    },
    {
        height: true,
        title: 'Prédio tal tal 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada nulla. Nulla ullamcorper massa ante, in feugiat metus maximus in. Maecenas ut sodales est. Duis eget commodo ligula.',
        image: {
            alt: 'Ap Image',
            src: apImageSource
        }
    }
]

export default aps

export {
    type IAp
}
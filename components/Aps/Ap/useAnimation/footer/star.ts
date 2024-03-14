import { Dispatch, SetStateAction } from 'react'
import gsap from 'gsap'

function star(index: number, setFinished: Dispatch<SetStateAction<boolean>>) {
    gsap.to(`.ap:nth-child(${index+1})>.content>.footer>.stars>.star`, {
        x: 0,
        opacity: 1,
        delay: 0.8,
        autoAlpha: 1,
        display: 'block',
        stagger: {
            each: 0.2
        },
        onComplete() {
            setFinished(true)
        }
    })
}

export default star
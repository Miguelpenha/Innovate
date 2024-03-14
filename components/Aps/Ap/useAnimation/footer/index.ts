import { Dispatch, SetStateAction } from 'react'
import gsap from 'gsap'
import aps from '../../../aps'
import star from './star'

function useFooter(setFinished: Dispatch<SetStateAction<boolean>>) {
    gsap.fromTo('.ap>.content>.footer', { 
        y: 80,
        autoAlpha: 1
    },
    { 
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: {
            each: 0.2,
            from: 'edges'
        },
        onStart() {
            aps.map((ap, index) => (
                star(index, setFinished)
            ))
        }
    })
}

export default useFooter
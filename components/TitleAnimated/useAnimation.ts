import { useEffect } from 'react'
import gsap from 'gsap'
import mediaAnimation from './media'

function useAnimation() {
    useEffect(() => {
        gsap.to('#title-animated', {
            scale: 1,
            duration: 1
        })

        gsap.to('#title-animated #logo', {
            ease: 'none',
            duration: 2.3,
            rotation: '360',
            onComplete() {
                gsap.to('#title-animated #logo', {
                    opacity: 0
                })
            }
        })

        mediaAnimation()        
    }, [])
}

export default useAnimation
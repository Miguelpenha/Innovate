import { useEffect } from 'react'
import gsap from 'gsap'

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

        const width = window.innerWidth

        if (width > 875) {
            gsap.to('#title-animated>.container-logo', {
                width: 0,
                duration: 3
            })
        } else {
            gsap.to('#title-animated>.container-logo', {
                height: 0,
                duration: 3.5,
                ease: 'sine.in'
            })
        }
    }, [])
}

export default useAnimation
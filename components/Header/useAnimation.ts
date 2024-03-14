import { useEffect } from 'react'
import gsap from 'gsap'

function useAnimation() {
    useEffect(() => {
        gsap.to('#header', {
            top: '5%',
            opacity: 1,
            autoAlpha: 1,
            duration: 0.8,
            onComplete() {
                gsap.to('#header', {
                    width: '90%',
                    duration: 1.5,
                    alignItems: 'flex-start',
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 15px'
                })
            }
        })
    }, [])
}

export default useAnimation
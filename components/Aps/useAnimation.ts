import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function useAnimation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('#aps', {
            y: 0,
            opacity: 1,
            duration: 1,
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px -25px 20px',
            scrollTrigger: {
                trigger: '#aps',
                start: window.innerWidth < 1285 ? '-12% start' : '10% center'
            }
        })
    }, [])
}

export default useAnimation
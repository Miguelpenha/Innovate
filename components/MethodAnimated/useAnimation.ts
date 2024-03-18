import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function useAnimation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('#method-animated', {
            filter: 'blur(0px)',
            scrollTrigger: {
                scrub: 1,
                end: 'top 20%',
                start: 'top 50%',
                trigger: '#method-animated'
            }
        })

        gsap.to('#method-animated', {
            filter: 'blur(0px)',
            scrollTrigger: {
                scrub: 1,
                end: 'top 20%',
                start: 'top 50%',
                trigger: '#method-animated'
            }
        })

        gsap.to('#method-animated>#logo', {
            bottom: '0%',
            rotation: '360',
            scrollTrigger: {
                scrub: 1,
                start: 'top 20%',
                end: 'bottom 0%',
                trigger: '#method-animated'
            }
        })
    }, [])
}

export default useAnimation
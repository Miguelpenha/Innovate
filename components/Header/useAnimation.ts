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
                    duration: 1,
                    width: '90%',
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 15px',
                    onComplete() {
                        gsap.to('#header>nav>.options li', {
                            x: 0,
                            opacity: 1,
                            autoAlpha: 1,
                            stagger: 0.2
                        })

                        gsap.to('#header>nav>.button', {
                            opacity: 1,
                            autoAlpha: 1
                        })
                    }
                })
            }
        })
    }, [])
}

export default useAnimation
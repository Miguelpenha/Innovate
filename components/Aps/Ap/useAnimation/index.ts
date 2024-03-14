import { useState, useEffect } from 'react'
import plugins from './plugins'
import gsap from 'gsap'
import hand from './hand'
import footer from './footer'

function useAnimation(index: number) {
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        plugins()
        
        gsap.fromTo('.ap',
            { 
                y: 80,
                opacity: 0,
                autoAlpha: 1
            },
            { 
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: {
                    each: 0.2,
                    from: window.innerWidth < 1285 ? 'start' : 'edges'
                },
                scrollTrigger: {
                    trigger: '#aps',
                    start: window.innerWidth < 1285 ? '-8% start' : '30% center'
                },
                onStart() {
                    hand()

                    footer(setFinished)
                }
            }
        )
    }, [])

    function handleMouseEnter() {
        if (finished) {
            gsap.to(`.ap:nth-child(${index+1})>.content>.hand`, {
                opacity: 0
            })

            gsap.to(`.ap:nth-child(${index+1})>.content>.title`, {
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                duration: 0.7
            })
    
            gsap.to(`.ap:nth-child(${index+1})>.content>.description`, {
                scale: 1,
                opacity: 1,
                autoAlpha: 1,
                duration: 0.7
            })
    
            gsap.to(`.ap:nth-child(${index+1})>.content>.footer>.stars>.star`, {
                y: -20,
                opacity: 0,
                stagger: 0.2,
                duration: 0.4
            })
    
            gsap.to(`.ap:nth-child(${index+1})>.content>.footer>.features>.feature`, {
                y: 0,
                delay: 0.2,
                opacity: 1,
                stagger: 0.2,
                autoAlpha: 1,
                duration: 0.4
            })
        }
    }

    function handleMouseLeave() {
        if (finished) {
            gsap.to(`.ap:nth-child(${index+1})>.content>.hand`, {
                opacity: 1
            })

            gsap.to(`.ap:nth-child(${index+1})>.content>.title`, {
                y: -50,
                opacity: 0,
                duration: 0.7
            })
    
            gsap.to(`.ap:nth-child(${index+1})>.content>.description`, {
                opacity: 0,
                scale: 0.85,
                duration: 0.7
            })
    
            gsap.to(`.ap:nth-child(${index+1})>.content>.footer>.stars>.star`, {
                y: 0,
                delay: 0.2,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4
            })
    
            gsap.to(`.ap:nth-child(${index+1})>.content>.footer>.features>.feature`, {
                y: '55%',
                opacity: 0,
                stagger: 0.2,
                duration: 0.4
            })
        }
    }

    return { handleMouseEnter, handleMouseLeave }
}

export default useAnimation
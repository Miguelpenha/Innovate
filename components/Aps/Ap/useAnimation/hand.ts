import gsap from 'gsap'

function hand() {
    gsap.to('.hand', {
        scale: 1,
        opacity: 1,
        autoAlpha: 1,
        duration: 0.8,
        stagger: {
            each: 0.2,
            from: 'edges'
        },
        onComplete() {
            gsap.to('.hand', {
                y: 10,
                repeat: -1,
                yoyo: true
            })
        }
    })
}

export default hand
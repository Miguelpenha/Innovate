import gsap from 'gsap'

interface MediaConditions {
    isMobile: boolean
    isDesktop: boolean
}

function mediaAnimation() {
    const media = gsap.matchMedia()

    media.add({ isMobile: '(max-width: 874px)', isDesktop: '(min-width: 875px)' }, context => {
        const { isMobile, isDesktop } = context.conditions as unknown as MediaConditions

        gsap.to('#title-animated>.container-logo', {
            height: isMobile ? 0 : 'none',
            width: isDesktop ? 0 : 'none',
            duration: isMobile ? 1.5 : 3,
            ease: isMobile ? 'sine.in' : 'none',
            onComplete() {
                media.kill()
            }
        })
    })
}

export default mediaAnimation
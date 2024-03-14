import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function plugins() {
    gsap.registerPlugin(ScrollTrigger)
}

export default plugins
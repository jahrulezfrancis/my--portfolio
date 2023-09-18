import { motion } from "framer-motion"


export default function SlideInAnimate({ child }) {
    return (
        <motion.div initial={{ scaleX: 0, }}
            transition={{ duration: 1.2, type: 'just' }}
            whileInView={{ scaleX: 1, }}
        >{child}</motion.div>
    )
}
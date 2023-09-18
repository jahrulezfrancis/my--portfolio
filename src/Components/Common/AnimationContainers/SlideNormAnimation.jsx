import { motion } from "framer-motion"

export default function BasicSlideAnimation({ child }) {

    return (
        <motion.div
            initial={{ opacity: 0.9, scale: 0, }}
            transition={{ duration: 1.1, type: 'tween' }}
            whileHover={{ scale: 1.01, opacity: 1}}
            whileInView={{ scale: 1, }}>
            {child}
        </motion.div>
    )
}
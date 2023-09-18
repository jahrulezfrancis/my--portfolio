import { motion } from "framer-motion"


export default function BounceAnimation({ child }) {

    return (
        <motion.div initial={{ scale: 0, }}
            transition={{ duration: 2, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ scale: 1, }}
        >
            {child}
        </motion.div>
    )
}
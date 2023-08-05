import { motion } from "framer-motion"
import LandingPage from "./landingPage"

const Home = (id) => {
	return (
		<motion.div
			className=""
			layoutId={id}
			// layout
			initial={{ opacity: 0, x: -1100 }}
			animate={{ opacity: 2, x: 0 }}
			exit={{ opacity: 0, x: 200 }}
			transition={{ duration: 0.8 }}
		>
			<LandingPage />
		</motion.div>
	)
}
export default Home;
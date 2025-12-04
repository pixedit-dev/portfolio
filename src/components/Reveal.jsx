import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, delay }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();
	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);

	return (
		<div ref={ref} className="overflow-hidden">
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 100 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.8, delay: delay }}>
				{children}
			</motion.div>
		</div>
	);
};

export default Reveal;

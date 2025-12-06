import { motion } from "framer-motion";
const Button = ({ children, className }) => {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
			className={className}>
			{children}
		</motion.button>
	);
};

export default Button;

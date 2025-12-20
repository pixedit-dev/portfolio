import { motion } from "framer-motion";

const ProfileImage = ({ src, className }) => {
	return (
		<motion.img
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{
				opacity: 1,
				scale: 1,
				y: [0, -4, 0],
			}}
			transition={{
				opacity: { duration: 1, ease: "easeOut" },
				scale: { duration: 0.6, ease: "easeOut" },
				y: {
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
				},
			}}
			whileHover={{
				scale: 1.04,
				boxShadow: "0px 10px 30px rgba(0,0,0,0.4)",
			}}
			src={src}
			className={className}
			draggable="false"
		/>
	);
};

export default ProfileImage;

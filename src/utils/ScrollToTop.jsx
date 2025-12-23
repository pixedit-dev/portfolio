import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import Button from "../components/Button";

const ScrollToTop = ({ isDark }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300);
		};
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	if (!isVisible) return null;

	return (
		<Button
			className={`${
				isDark ? "bg-white/10" : "bg-black/30"
			} fixed bottom-6 right-6 z-50
				p-2 sm:p-3 rounded-full
				backdrop-blur
				border border-white/20
				text-white
				hover:bg-white/20
				transition-all cursor-pointer animate-bounce`}
			onClick={scrollToTop}>
			<FiArrowUp className="text-xl" />
		</Button>
	);
};

export default ScrollToTop;

const SkillItem = ({ name, Icon, imageSrc }) => {
	return (
		<div className="flex flex-col items-center gap-2 p-4 rounded-xl text-center transition hover:bg-white/5">
			{Icon ? (
				<Icon className="text-3xl sm:text-4xl text-white" />
			) : (
				<img
					src={imageSrc}
					alt={name}
					className="max-w-15 max-h-10 object-cover"
				/>
			)}
			<span className="text-[10px] sm:text-sm text-gray-300">{name}</span>
		</div>
	);
};

export default SkillItem;

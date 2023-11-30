export default function Arca() {
	return (
		<>
			<video
				data-testid="arca-video"
				src="https://raw.githubusercontent.com/mbb10324/react-arca/master/docs/assets/videos/react-arca.mp4"
				autoPlay
				loop
				muted
			/>
			<h1 data-testid="arca-message">
				react-arca is designed to empower the developer. If you have any issues
				<br /> or want to see things added/removed, reach out to us on{" "}
				<a href="https://github.com/mbb10324/react-arca" target="_blank" rel="noopener noreferrer">
					github
				</a>
			</h1>
		</>
	);
}

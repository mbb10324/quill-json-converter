import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
	test("renders the video", () => {
		render(<App />);
		const videoElement = screen.getByTestId("arca-video");
		expect(videoElement).toBeInTheDocument();
	});

	test("renders the message", () => {
		render(<App />);
		const messageElement = screen.getByTestId("arca-message");
		expect(messageElement).toBeInTheDocument();
	});

	test("renders the link", () => {
		render(<App />);
		const linkElement = screen.getByRole("link", { name: /github/i });
		expect(linkElement).toBeInTheDocument();
	});
});

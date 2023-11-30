import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Arca from "./Components/Arca.js";
import "./App.css";

export default function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Arca />} />
				</Routes>
			</Router>
		</div>
	);
}

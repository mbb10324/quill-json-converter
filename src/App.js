import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "./App.css";
import { useState } from "react";

export default function App() {
	const [delta, setDelta] = useState();

	function handleQullJSON(content, delta, source, editor) {
		const theDelta = editor.getContents();
		setDelta(theDelta);
		if (theDelta.ops[0].insert === "\n") {
			setDelta();
		}
	}

	return (
		<div className="app">
			<h1>Quill JSON Converter</h1>
			<div className="quill-wrapper">
				<ReactQuill theme="snow" onChange={handleQullJSON} placeholder="Start Typing..." />
				<div className="quill-json">
					<h2>Output:</h2>
					<pre>{JSON.stringify(delta, null, 2)}</pre>
				</div>
			</div>
		</div>
	);
}

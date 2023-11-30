import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import "./App.css";

export default function App() {
	const [delta, setDelta] = useState();
	const [copied, setCopied] = useState(false);

	function handleQullJSON(content, delta, source, editor) {
		const theDelta = editor.getContents();
		setDelta(theDelta);
		if (theDelta.ops[0].insert === "\n") {
			setDelta();
		}
	}

	function copyJsonToClipboard() {
		const deltaJson = JSON.stringify(delta, null, 2);
		navigator.clipboard.writeText(deltaJson);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 3000);
	}

	return (
		<div className="app">
			<h1>Quill JSON Converter</h1>
			<div className="quill-wrapper">
				<ReactQuill theme="snow" onChange={handleQullJSON} placeholder="Start Typing..." value={delta} />
				<button className="qsc-button" onClick={() => setDelta()}>
					Reset Editor
				</button>
				<div className="quill-json">
					<h2>Output:</h2>
					<pre>{JSON.stringify(delta, null, 2)}</pre>
				</div>
				<button className="qsc-button" onClick={copyJsonToClipboard}>
					Copy Json To Clipboard
				</button>
				{copied && <span>Copied To Clipboard!</span>}
			</div>
		</div>
	);
}

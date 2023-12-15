import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useRef, useState } from "react";
import "./App.css";

export default function App() {
	const [delta, setDelta] = useState();
	const [copied, setCopied] = useState(false);
	const [selected, setSelected] = useState("Make Json");
	const [file, setFile] = useState();
	const fileInputRef = useRef();

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

	function handleFileUpload(e) {
		const file = e.target.files[0];
		if (file) {
			const fileExtension = file.name.split(".").pop().toLowerCase();
			if (fileExtension !== "json") {
				alert("Please upload a JSON file.");
				fileInputRef.current.value = "";
				return;
			}
			const fileReader = new FileReader();
			fileReader.onload = (e) => {
				try {
					const fileContent = JSON.parse(e.target.result);
					setFile(fileContent);
				} catch (error) {
					alert("Error reading JSON file: " + error.message);
				}
			};
			fileReader.readAsText(file);
		}
	}

	function clearFileAndEditor() {
		setFile();
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	}

	return (
		<div className="app">
			<h1>Quill JSON Converter</h1>
			<div className="quill-wrapper">
				<div className="nav-selector">
					<div className="nav-wrapper">
						<div
							className={`${selected === "Make Json" ? "selected" : ""} selector-option`}
							onClick={() => setSelected("Make Json")}
						>
							Make Json
						</div>
						<div
							className={`${selected === "Read Json" ? "selected" : ""} selector-option`}
							onClick={() => setSelected("Read Json")}
						>
							Read Json
						</div>
					</div>
				</div>
				{selected === "Make Json" && (
					<div className="edit-area">
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
				)}
				{selected === "Read Json" && (
					<div className="edit-area">
						<h2 htmlFor="file">Upload JSON File</h2>
						<div className="file-upload-wrapper">
							<input
								type="file"
								id="file"
								name="file"
								className="file-uploader"
								onChange={handleFileUpload}
								ref={fileInputRef}
							/>
						</div>
						<button className="qsc-button" onClick={clearFileAndEditor}>
							Clear File and Editor
						</button>
						<ReactQuill theme="snow" readOnly={true} modules={{ toolbar: false }} value={file && file} />
					</div>
				)}
			</div>
		</div>
	);
}

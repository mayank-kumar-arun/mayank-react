import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export interface RdsTextEditorProps {
	width?: number;
}

const RdsTextEditor = (props: RdsTextEditorProps) => {
	return (
		<Editor
			toolbarClassName="toolbarClassName"
			wrapperClassName="wrapperClassName"
			editorClassName="editorClassName"
			wrapperStyle={{
				width: props.width,
				border: "1px solid black",
			}}
		/>
	);
};

export default RdsTextEditor;

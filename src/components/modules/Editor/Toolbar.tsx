"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";

export default function Toolbar() {
    const [editor] = useLexicalComposerContext();

    return (
        <div className="flex gap-2 border-b p-2 bg-gray-50">
            <button
                type="button"
                onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
                className="px-2 py-1 border rounded"
            >
                Bold
            </button>
            <button
                type="button"
                onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
                className="px-2 py-1 border rounded"
            >
                Italic
            </button>
            <button
                type="button"
                onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}
                className="px-2 py-1 border rounded"
            >
                Underline
            </button>
        </div>
    );
}

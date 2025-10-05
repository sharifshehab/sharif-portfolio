/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
    LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $createParagraphNode, $createTextNode, $getRoot, EditorState, } from "lexical";
import Toolbar from "./Toolbar";

interface LexicalProps {
    value?: string
    onChange: (value: string) => void
}

export default function LexicalEditor({ value, onChange }: LexicalProps) {

    const initialConfig = {
        namespace: 'LexicalEditor',
        theme: {},
        onError(error: Error) {
            console.log(error);
        },
        editorState: () => {
            const root = $getRoot();
            if (value) {
                // If you stored JSON from Lexical, you can parse it and use editor.parseEditorState
                // For now, treat as plain text:
                const paragraph = $createParagraphNode();
                paragraph.append($createTextNode(value));
                root.append(paragraph);
            }
        },
    };

    // When editor changes, bubble JSON string to parent form
    const handleChange = (editorState: EditorState) => {
        editorState.read(() => {
            const plainText = $getRoot().getTextContent();
            onChange(plainText); // update parent form
        });
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <div className="border rounded-none h-auto">
                <Toolbar /> {/* editor tool bar */}
                <RichTextPlugin
                    contentEditable={
                        <ContentEditable
                            className={`${value ? "text-white" : ""} outline-none ps-3 py-2 min-h-36`}
                            aria-placeholder={'Write project description'}
                            placeholder={<div className="ps-3">{'Write description'}</div>}
                        />
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <OnChangePlugin onChange={handleChange} />
                <HistoryPlugin />
                <AutoFocusPlugin />


                <OnChangePlugin
                    onChange={(editorState: EditorState, editor) => {
                        editorState.read(() => {
                            const root = editorState.toJSON().root;
                            const plainText =
                                root.children
                                    ?.flatMap((n: any) =>
                                        n.children?.map((c: any) => c.text) || []
                                    )
                                    .join("") || "";
                            onChange(plainText); // returns plain text
                        });
                    }}
                />
            </div>
        </LexicalComposer>
    );
}

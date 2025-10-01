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
import { EditorState } from "lexical";
import Toolbar from "./Toolbar";

interface LexicalProps {
    onChange: (value: string) => void
}

export default function LexicalEditor({ onChange }: LexicalProps) {

    const initialConfig = {
        namespace: 'LexicalEditor',
        theme: {},
        onError(error: Error) {
            console.log(error);
        },
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <div className="border rounded-md">
                <Toolbar /> {/* editor tool bar */}
                <RichTextPlugin
                    contentEditable={
                        <ContentEditable
                            className="outline-none ps-3 pt-2"
                            aria-placeholder={'Write project description'}
                            placeholder={<div>Write project description...</div>}
                        />
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                />
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

// import { } from '@ckeditor/ckeditor5-build-classic';
import { CKEditor, CKEditorContext, ClassicEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';
import { useState } from 'react';
import "./RichText.css"

const RichText = () => {
    const [text, setText] = useState("")
    return (
        <div className="app">
            <CKEditorContext context={Context}>
                {/* <div className="editor">
                <CKEditor
                    editor={ClassicEditor}

                    data={text}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setText(data)
                    }}
                />
            </div>
            <div>
                <h2>Content</h2>
                <p>{(text)}</p>
            </div> */}
            </CKEditorContext>
        </div>
    );
};

export default RichText;

import React, { useState } from 'react'

export default function TextForm2(props) {
    const [text, setText] = useState("");
    const UpperCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const LowerCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const Clear = () => {
        let newtext = '';
        setText(newtext);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={8} defaultValue={""} />
                <button type="button" className="btn btn-primary mt-3" onClick={UpperCase}>Convert to upper case</button>
                <button type="button" className="btn btn-primary mt-3 ms-3" onClick={LowerCase}>Convert to lower case</button>
                <button type="button" className="btn btn-primary mt-3 ms-3" onClick={Clear}>Clear</button>
            </div>
            <div>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>

            <div>
                <h1>Copy to Clipboard!</h1>
                <h4>By Salman</h4>
                <p>{text}</p>
                <button
                    onClick={() => {
                        navigator.clipboard.writeText(text);
                    }}
                >
                    Copy
                </button>
            </div>
        </>
    )
}

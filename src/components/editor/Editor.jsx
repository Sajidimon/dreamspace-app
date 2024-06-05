/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import JoditEditor from 'jodit-react';
import { useMemo, useRef, useState } from 'react';

const Editor = ({ placeholder }) => {

    const editor = useRef(null);
    const [content, setContent] = useState('');


    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || 'Enter Description...',
        height: '400px',
        style: {
            padding: '15px',
            font: '16px Arial',
            color: 'black',
        }
    }),
        [placeholder]
    );

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => { }}
        />
    );
};

export default Editor;
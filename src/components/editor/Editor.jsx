/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import JoditEditor from 'jodit-react';
import { useMemo, useRef } from 'react';

const Editor = ({ value, onChange, placeholder }) => {
    const editor = useRef(null);

    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || 'Enter Description...',
        height: '400px',
        style: {
            padding: '15px',
            font: '16px Arial',
            color: 'black',
        }
    }), [placeholder]);

    return (
        <JoditEditor
            ref={editor}
            value={value}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => onChange(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={() => { }} // Empty to avoid unnecessary updates
        />
    );
};

export default Editor;

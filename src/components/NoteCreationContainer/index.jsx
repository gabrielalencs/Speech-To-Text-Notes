// React

import { useEffect, useState, useRef } from 'react';

// Tippy.js

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/svg-arrow.css';

// React Icons

import { FaBold } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa";
import { MdFormatUnderlined } from "react-icons/md";


const NoteCreationContainer = () => {

    const [noteText, setNoteText] = useState('');
    const containerNoteRef = useRef(null);

    window.addEventListener('click', (event) => {
        if (containerNoteRef.current && event.target.closest('.textFormattingButton')) {
            containerNoteRef.current.focus();
        }
    });

    // Tippy.js

    useEffect(() => {
        const tooltipsContent = [
            "Negrito",
            "Itálico",
            "Sublinhado",
        ];

        document.querySelectorAll('.textFormattingButton').forEach((button, index) => {
            tippy(button, {
                content: tooltipsContent[index],
                animation: "shift-away",
                theme: "textFormattingButtonTippy",
            });
        });
    }, []);



    return (
        <div className=" border border-blue-header rounded-md max-w-[700px]">
            <div className="py-4 px-5 flex items-center gap-5 text-white bg-blue-container-notes-header">
                <button id="boldButton">
                    <FaBold className="textFormattingButton" />
                </button>

                <button id="italicButton">
                    <FaItalic className="textFormattingButton" />
                </button>

                <button id="underlineButton">
                    <MdFormatUnderlined className="textFormattingButton text-xl relative top-[0.5px]" />
                </button>
            </div>

            <div className='bg-blue-container-notes h-[350px] p-5 outline-none'>
                <textarea
                    className='bg-transparent text-white inline-block h-full w-full resize-none focus:outline-none'
                    ref={containerNoteRef}
                    value={noteText}
                    onChange={(event) => setNoteText(event.target.value)}
                />
            </div>
        </div>
    )
}

export default NoteCreationContainer
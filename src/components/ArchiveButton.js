import React from 'react';

function ArchiveButton({ id, onClick }) {
    return <button className='note-item__archive-button' onClick={() => onClick(id)}>Archive</button>
}
   
export default ArchiveButton;
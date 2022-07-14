import React from 'react';

function UnArchiveButton({ id, onUnArchive }) {
    return <button className='note-item__archive-button' onClick={() => onUnArchive(id)}>UnArchive</button>
}
   
export default UnArchiveButton;
import React from "react";

function Modal({currentPhoto}) {
    const {name, category, description, index} = currentPhoto;
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">Project Name</h3>
                <img alt="current project" />
                <p>
                    Project Description
                </p>
                <button type="button">
                    Close Project Description
                </button>
            </div>
        </div>

    )
}

export default Modal;
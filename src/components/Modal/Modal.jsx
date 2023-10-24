import "./Modal.css";
import { useEffect, useState } from "react";
import waiting from "../../utils/waiting";
import { MdClose } from "react-icons/md";

const Modal = ({
        className = [],
        tDelay = 250, // transition duration
        hasBackground = true,
        backgroundClose = false, // event to close the modal attached to the background - can be disable
        children, 
        isModalOpen = false, 
        setIsModalOpen, 
        hasHeader = false,
        title = "Modal",
        hasFooter = true,
        hasCloseBtn = true,
        closeBtnClass = [],
        closeBtnText = "close",
        hasValidBtn = false,
        validBtnClass = [],
        validBtnText = "valid",
        validBtnFunc
}) => {
    const [containerOpacity, setContainerOpacity] = useState("0");
    const [transitionDelay] = useState((typeof(tDelay) === "number") ? tDelay : 1000);

    useEffect(() => {
        if (isModalOpen) {
            setContainerOpacity("1");
        }
    }, [isModalOpen, setIsModalOpen]);

    const handleClose = async () => {
        if (isModalOpen && containerOpacity === "1") {
            setContainerOpacity("0");

            await waiting(transitionDelay);

            setIsModalOpen(false);
        }
    }

    return (
        <>
            {
                (isModalOpen) &&
                <div style={(hasBackground) ? { backgroundColor: "rgb(0 0 0 / 50%)" } : null} className={`modal-background${(className.length > 0) ? ` ${className.join(" ")}` : ""}`} onClick={(backgroundClose) ? () => setIsModalOpen(false) : null}>
                    <div style={{ opacity: containerOpacity, transitionDuration: `${transitionDelay}ms` }} className="modal-container">
                        {
                            (hasHeader) &&
                            <div className="modal-header">
                                <h2>{title}</h2>
                                <button onClick={handleClose}>
                                    <MdClose />
                                </button>
                            </div>
                        }
                    
                        <div className="modal-content">
                            {children}
                        </div>
                        {
                            (hasFooter) &&
                            <div className="modal-footer">
                                {
                                    (hasCloseBtn) &&
                                    <button className={`${(closeBtnClass.length > 0) ? closeBtnClass.join(" ") : ""}`} onClick={handleClose}>
                                        {closeBtnText}
                                    </button>
                                }
                                {
                                    (hasValidBtn) &&
                                    <button className={`${(validBtnClass.length > 0) ? validBtnClass.join(" ") : ""}`} onClick={validBtnFunc}>
                                        {validBtnText}
                                    </button>
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;
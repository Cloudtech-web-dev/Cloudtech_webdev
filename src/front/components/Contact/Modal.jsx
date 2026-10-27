import styles from "../../styles/components/HeaderContact.module.css";

import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';


export const Modal = ({ isOpen, onClose, children }) => {
    const dialogRef = useRef(null);


    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        isOpen ? dialog.showModal() : dialog.close();
        
    }, [isOpen]);


    return createPortal(
        /* Modal itself (overlay customization goes here) */
        <dialog ref={dialogRef} onMouseUp={e => e.target === dialogRef.current && onClose()} onClose={onClose} className={`${styles.modalOverlay}`}>

            {/* Main Modal Container */}
            <div className={styles.modalContainer}>

                {/* Inner Container (scrolling behavior goes here) */}
                <div className={styles.scrollContainer}>
                    {children}
                </div>

            </div>

        </dialog>,
        document.body
    );
};
function Modal(props){
    function cancelhandler(){
        props.onCancel();

    }

    function confirmhandler(){
        props.onConfirm();
    }
    return (
        <div className="modal">

             <p className="text">Are your sure?</p>
             <div>
             <button className="btn" onClick={cancelhandler}>Cancel</button>
             <button className="btn2" onClick={confirmhandler}>Confirm</button>
             </div>
        </div>
    )
}

export default Modal;
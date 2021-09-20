import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './backdrop'
function Todo(props) {
  const [modalisopen, setmodalisopen] = useState(false);
    function deleteHandler(){
      setmodalisopen(true);

    }

    function closemodal(){
      setmodalisopen(false);

    }
    return (
      <div className="card">
          <div>{props.word}</div>
            <button className="btn" onClick={deleteHandler}>Delete</button>
      {/* {modalisopen ? <Modal/> : null} */}
      {modalisopen && (<Modal onCancel={closemodal} onConfirm={closemodal}/>)}
      {modalisopen && <Backdrop onCancel={closemodal}/>}

      </div> 
    );
  }
  
  export default Todo;
  
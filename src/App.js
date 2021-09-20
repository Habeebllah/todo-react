import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/backdrop';
function App() {
  return (
    <div>
        <h1>My Todos</h1>
        <Todo word="Learning React Js"/>
        <Todo word="Studying React Js"/>
        <Todo word="Loving React Js"/>
        <Todo word="Reading React Js"/>
  
      </div>
  );
}

export default App;

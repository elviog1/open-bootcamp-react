import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import TaskListContact from './components/container/taskListContact';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo4 from './hooks/Ejemplo4';
import TaskComponent from './components/pure/task';
import GreetingStyled from './components/pure/GreetingStyled';
import Clock from './components/pure/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <TaskListContact /> */}
        {/* <Ejemplo2 /> */}

        {/* <Ejemplo4 nombre="elvito">
          <h3>contenido de children</h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Elvitooo" /> */}
        <Clock />
      </header>
    </div>
  );
}

export default App;

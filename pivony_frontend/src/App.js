import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './components/DragDrop'
import './App.css';
import Chart from './components/Chart';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='container'>
        <div className='row border border-dark mt-5'>
          <div className="App d-inline-flex">
            <DragDrop />
          </div>
          
        </div>
      </div>
      
    </DndProvider>

  );
}

export default App;

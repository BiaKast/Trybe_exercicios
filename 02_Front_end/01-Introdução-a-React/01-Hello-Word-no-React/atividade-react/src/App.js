// import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const afazeres = ['almoço', 'limpar a casa', 'fazer a comida', 'ir embusca do futuro'];
  return afazeres.map((tarefa) => (Task(tarefa)));
}

export default App;

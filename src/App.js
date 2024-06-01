import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import {data} from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
    </div>
  );
}

export default App;

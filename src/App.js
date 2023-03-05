import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome"/>
      <CampoTexto label="Campo"/>
      <CampoTexto label="Texto"/>
    </div>
  );
}

export default App;

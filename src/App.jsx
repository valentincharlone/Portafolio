
import { Dna } from 'react-loader-spinner'
import './index.css'
import { MyRoutes} from './routes/MyRoutes'
import { useEffect, useState } from 'react';

function App() {
  
  const [loading, setLoading] = useState(true); // Estado inicial de loading en true

  useEffect(() => {
    // Simula una carga de datos o proceso que tarde 3 segundos
    const timer = setTimeout(() => {
      setLoading(false); // Cambia el estado de loading a false después de 3 segundos
    }, 2000);

    return () => clearTimeout(timer); // Limpia el timeout si se desmonta el componente
  }, []);

  return (
    <div className="App">
      {loading ? ( // Muestra el spinner de carga solo si loading es true
        <div className="loader-container">
          <Dna type="Puff" color="#00BFFF" height={150} width={150} />
        </div>
      ) : (
        <MyRoutes />
      )}
    </div>
  );
}

export default App

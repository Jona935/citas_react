import ListadoClientes from './components/ListadoClientes'
import Header from './components/Header'
import Formulario from './components/Formulario'
import { useState, useEffect } from 'react'
function App() {
  const INITIAL = () => JSON.parse(localStorage.getItem('pacientes')) || [];
  const [pacientes, setPacientes] = useState(INITIAL);
  const [paciente, setPaciente] =useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id =>{
    const pacientesActualizados= pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)

  }

  return (
    <div className='container mx-auto mt-12'>
      <Header/>
      <div className='mt-12 justify-center md:flex'>
        <Formulario
        paciente={paciente}
        pacientes={pacientes}
        setPacientes={setPacientes}
        setPaciente={setPaciente}        
        />
        <ListadoClientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App

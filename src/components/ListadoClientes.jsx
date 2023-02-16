import { useEffect } from 'react';
import Paciente from './Paciente'


const ListadoClientes = ({pacientes,setPaciente,eliminarPaciente}) => {

  return (
    <div className='flex flex-col pt-12 md:pt-0 items-center md:w-1/2 lg:w-3/5 h-screen z-10' >

       {pacientes && pacientes.length ? (
          <>
          <h2 className='font-black text-3xl text-center'>Listado de Clientes</h2>
          <p className='font-bold text-lg mt-5 text-center mb-10'>Administra tus {''}
           <span className=' text-amber-400 '>Pacientes y Citas</span>
          </p>
          <div className='h-screen w-full overflow-y-scroll z-10'>
          {pacientes.map((paciente) => (
          <Paciente
             key={paciente.id}
             paciente={paciente}
             setPaciente={setPaciente}
             eliminarPaciente={eliminarPaciente}
          />
           
          ))}
          </div>
          </>
       ) : (
          <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='font-bold text-lg mt-5 text-center mb-10'>Comienza agregar pacientes {''}
          <span className=' text-amber-400 '>Y apareceran en este lugar</span>
          </p>
          </>
       )}
    </div>
  )
}

export default ListadoClientes
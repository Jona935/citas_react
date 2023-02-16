
function Paciente({paciente, setPaciente, eliminarPaciente}) {
  const {nombre, propietario, numero, email, fecha, sintomas, id}=paciente;

  const handleEliminar= () => {
    const respuesta = confirm('Deseas eliminar a este paciente?')

    if(respuesta){
      eliminarPaciente(id)
    }
  }





  return (
    <div className='self-start w-7/8 block mx-5 mb-3 px-5 py-10 bg-white shadow-md rounded-lg'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{' '}
          <span className='font-normal normal-case '>{nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:{' '}
          <span className='font-normal normal-case'>{propietario}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Numero telefonico:{' '}
          <span className='font-normal normal-case '>{numero}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email:{' '}
          <span className='font-normal normal-case '>{email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta:{' '}
          <span className='font-normal normal-case '>{fecha}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>sintomas:{' '}
          <span className='font-normal normal-case '>{sintomas}</span>
        </p>

        <div className="flex justify-around mt-10">
          <button
          type="button"
          className="py-2 px-10 bg-amber-400 rounded-md text-lg font-bold hover:bg-amber-500 uppercase"
          onClick={()=> setPaciente(paciente)}
          >Editar</button>
          <button
          type="button"
          className="py2 px-10 bg-red-600 rounded-md text-lg font-bold hover:bg-red-700 uppercase"
          onClick={handleEliminar}
          >Eliminar</button>
        </div>
       </div>
  )
}

export default Paciente
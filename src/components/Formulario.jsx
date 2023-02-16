import {useState, useEffect} from "react"
import Error from "./Error.jsx";

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] =useState(false)


  useEffect(()=>{
      if(Object.keys(paciente).length >0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setNumero(paciente.numero)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)

      }
  },[paciente])

  const generarId = ()=>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }


  const handleSubmit= (e) => {
    e.preventDefault();

    //Validacion de formulario

    if([nombre,propietario,numero,email,fecha,sintomas].includes('')){
      console.log('Hay almenos un campo vacio');

      setError(true)
      return
    }
    
    setError(false)
    const objetoPaciente = {
      nombre,
      propietario,
      numero,
      email,
      fecha,
      sintomas,
      

    }

    if(paciente.id){
      //Editando el registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      
      setPacientes(pacientesActualizados)
      setPaciente({})
    }
    else{
      //Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar el form

    setNombre('')
    setPropietario('')
    setNumero('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center '>Seguimiento de Pacientes</h2>
        <p className='font-bold text-lg mt-5 text-center mb-10'>
            Añade Pacientes y {''}
            <span className=' text-amber-400'>Administralos</span>
        </p>
        <form
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded-lg py-10 px-5'>

            {error && (
              <Error 
              mensaje='Todos Los Campos son obligatorios'
              />
            )}
          <div className='mb-5'>
            <label htmlFor="mascota" className='font-black block text-gray-700 uppercase  '>Nombre De La Mascota</label>
            <input 
            id='mascota'
            type="text"
            placeholder='Nombre De La Mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
             />
          </div>
          <div className='mb-5'>
            <label htmlFor="propetario" className='font-black block text-gray-700 uppercase  '>Nombre Del Propietario</label>
            <input 
            id='propietario'
            type="text"
            placeholder='Nombre Del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
             />
          </div>
          <div className='mb-5'>
            <label htmlFor="numero" className='font-black block text-gray-700 uppercase  '>Numero Del Propietario</label>
            <input 
            id='numero'
            type="text"
            placeholder='866-139-5734'
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
            value={numero}
            onChange={ (e) => setNumero(e.target.value) }
             />
          </div>
          <div className='mb-0'>
            <label htmlFor="email" className='font-black block text-gray-700 uppercase  '>Email</label>
            <input 
            id='email'
            type="email"
            placeholder='Email Contacto Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
             
             />
          </div>
          <div className='mb-5'>
            <label htmlFor="mascota" className='font-black block text-gray-700 uppercase'>Alta</label>
            <input 
            id='alta'
            type="date"
            placeholder='Nombre De La Mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
             />
          </div>
          <div className='mb-5'>
            <label htmlFor="mascota" className='font-black block text-gray-700 uppercase  '>Sintomas</label>
            <textarea 
            name="" 
            id="sintomas"
            placeholder='Describe Los Sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md'
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) } 
            ></textarea>
          </div>
          <input 
          type="submit"
          className='bg-amber-400 hover:bg-amber-500 w-full p-3 uppercase font-bold text-black rounded-lg cursor-pointer transition-opacity'
          value={paciente.id ? 'editar paciente' : 'agregar paciente'}
           />
          
        </form>
    </div>
  )
}

export default Formulario
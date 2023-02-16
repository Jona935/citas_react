
const Error = ({mensaje}) => {
  return (
    <div className=" bg-red-800 text-white text-center uppercase font-bold rounded-md p-3 mb-5">
        <p>
        {mensaje}
        </p>
    </div>
  )
}

export default Error
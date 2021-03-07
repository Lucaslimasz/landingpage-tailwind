
export default function Rodape(){
  return(
    <div className='container max-w-5xl text-white w-screen flex items-center justify-between flex-col md:flex-row'>
      <div>
        <h1 className='text-2xl uppercase font-medium p-2'>Entrar em contato</h1>
      </div>
      <div className='outline-none p-2'>
        <input className='px-5 py-1 text-lg text-black rounded-2xl' placeholder='Digite seu e-mai'/>
        <button className='bg-white px-6 py-1.5 text-black ml-4 outline-none rounded-2xl'>Enviar</button>
      </div>
    </div>
  )
}
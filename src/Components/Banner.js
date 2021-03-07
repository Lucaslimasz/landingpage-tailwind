export default function Banner() {
  return (
    <div className="container max-w-5xl m-auto p-6 flex-1 flex flex-col justify-center items-center sm:items-start text-center sm:text-left" >     
      <div className="text-gray uppercase text-4xl font-extrabold leading-snug">
        Desenvolver <span className='text-green'>software</span> de verdade
      </div>
      <span className="text-gray">DEV CURIOSO É UM DEV <span className='text-green'>EXCELENTE</span></span>
    </div>
  );
}

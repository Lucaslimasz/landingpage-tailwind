export default function Banner() {
  return (
    <div className="container max-w-5xl m-auto p-6 flex-1 flex flex-col justify-center items-center sm:items-start text-center sm:text-left" >     
      <span className="text-gray">Nextjs + Tailwind</span>
      <div className="text-gray uppercase text-4xl font-extrabold leading-snug">
        Desenvolver <span className='text-green'>software</span> de verdade
      </div>
      <span className="text-gray">Dev curioso é um dev excelente</span>
    </div>
  );
}

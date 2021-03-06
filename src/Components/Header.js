export default function Header() {
  return (
    <div className='p-2 container max-w-5xl m-auto flex justify-between items-center'>

      <div>
        <img
          src="/logo.png"
          width={150}
          className="p-2 hidden md:inline-block"
        />
        <img src="/codar.png" width={50} className="p-2 md:hidden" />
      </div>

      <div className="p-2 flex items-center">
        <a href="http://github.com/lucaslimasz" target="_blank">
          Github
        </a>
        <a href="http://instagram.com/lukinhaslimasz" target="_blank">
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/lucas-lima-85302016a/" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

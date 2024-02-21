// nav data

// componentes
import Socials from './Socials'

export default function NavMobile() {

  return (
    <nav className="flex flex-col w-full h-full overflow-hidden justify-evenly">
      <ul className="flex flex-col items-center justify-center py-6 mb-8 gap-y-6">
        <li>
          <a className="text-2xl uppercase font-primary" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="text-2xl uppercase font-primary" href="#about">
            Nosotros
          </a>
        </li>
        <li>
          <a className="text-2xl uppercase font-primary" href="#galery">
            Galería
          </a>
        </li>
        <li>
          <a className="text-2xl uppercase font-primary" href="#testimonial">
            Artistas
          </a>
        </li>
        <li>
          <a className="text-2xl uppercase font-primary" href="#special">
            Especialidades
          </a>
        </li>
        <li>
          <a className="text-2xl uppercase font-primary" href="#contact">
            Contacto
          </a>
        </li>
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  )
}

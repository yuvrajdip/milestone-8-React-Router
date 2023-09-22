import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';

const NavBar = () => {

  const [open, setOpen] = useState(false)

  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/*', name: 'Not Found' }
  ]

  return (
    <nav className=" bg-yellow-200 text-black">
      <div onClick={() => setOpen(!open)} className="ml-4 text-2xl h-10 md:hidden flex items-center">
        {
          open ? <RxCross1></RxCross1> : <HiOutlineMenuAlt1></HiOutlineMenuAlt1>
        }
      </div>

      <ul className={`
            absolute duration-1000 md:flex md:static bg-yellow-200 
            ${open ? 'top-10' : '-top-60'}
          `}
      >
        {
          routes.map(route =>
            <Link
              key={route.id}
              route={route}>
            </Link>
          )
        }
      </ul>
    </nav>
  );
};



export default NavBar;
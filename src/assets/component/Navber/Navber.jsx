import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navber = () => {

    const [open, setOpen] = useState(false); 

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Profile', path: '/profile' },
      ];
      
      
    return (
        <nav>
           <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
           {
            open === true ? 
            <AiOutlineClose></AiOutlineClose> :
            <AiOutlineMenu></AiOutlineMenu>
           }
           </div>
            <ul className={`md:flex duration-1000 py-5 absolute md:static ${open ? 'top-16' : '-top-60'} bg-yellow-500 text-white px-6`}>
            {routes.map(route => <Link key={route.id} route={route}></Link>)}
            </ul>
        </nav>
    );
};

export default Navber;
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavLinks = () => {
    return (
        <>
            <a className='hover:text-amber-400  hover:glow hover:underline' href="/">Home</a>
            <a className='hover:text-amber-400 brightness-200 hover:underline' href="#menu">Products</a>
            <a className='hover:text-amber-400 hover:underline' href="/Locations">Locations</a>
            <a className='hover:text-amber-400 hover:underline' href="/Membership">Memberships</a>
            <a className='hover:text-amber-400 hover:underline' href="/AboutUs">About Us</a>
        </>
    );
};

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const OpenNav = () => {
        console.log("OpenNav");
        setIsOpen(!isOpen);
    };

    return (
        <nav className='flex w-1/3 justify-end'>
            <div className='hidden w-full justify-between md:flex font-mono text-lg'>
                <NavLinks />
            </div>
            <div className='md:hidden'>
                <button onClick={OpenNav}>{isOpen ? <X /> : <Menu />}</button>
            </div>

            {isOpen && (
                <div className='flex flex-col items-center text-xl space-y-4 basis-full'>
                    <NavLinks />
                </div>
            )}
        </nav>
    )
}

export default NavBar;

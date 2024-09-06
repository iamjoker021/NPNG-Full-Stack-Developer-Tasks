import { HashLink } from 'react-router-hash-link';

const NavList = () => {
    return (
        <ul>
            <li><HashLink to="/#home">Home</HashLink></li>
            <li><HashLink to="/#about">About</HashLink></li>
            <li><HashLink to="/#services">Services</HashLink></li>
            <li><HashLink to="/#blogs">Trending-Blogs</HashLink></li>
            <li><HashLink to="/#contact">Contact</HashLink></li>
        </ul>
    )
}

export default NavList
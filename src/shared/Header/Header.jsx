import userImg from '../../assets/images/myimghd.png'
import { Link } from 'react-scroll'; 
import '../Header/Header.css'


const Header = () => {
    const navLinks = <>
        <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500}><li className="text-slate-400 text-lg font-bold cursor-pointer">Home</li></Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}><li className="text-slate-400  text-lg font-bold cursor-pointer">About Me</li></Link>
        <Link activeClass="active" to="services" spy={true} smooth={true} offset={-100} duration={500}><li className="text-slate-400  text-lg font-bold cursor-pointer">Services</li></Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}><li className="text-slate-400 text-lg  font-bold cursor-pointer">Skill's</li></Link>
        <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={500}><li className="text-slate-400  text-lg font-bold cursor-pointer">Portfolio</li></Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}><li className="text-slate-400 text-lg font-bold cursor-pointer ">Contact</li></Link>
    </>

    return (
        <div className='  text-slate-400'>
            <div className="navbar md:px-16 fixed bg-black z-10">
                <div className="py-3 navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu gap-4 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 nav-menu px-8">
                            {navLinks}
                        </ul>
                    </div>
                    <p className=" text-slate-400 bg-black border-0 font-bold text-4xl"><span className="text-teal-400">R</span>azu.<span className='text-2xl'>Me</span></p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-4 menu-horizontal px-1 nav-menu">
                        {navLinks}
                    </ul>

                </div>
                <div className='navbar-end'>
                    <img className='h-9 w-9 border-2 border-teal-500 rounded-full' src={userImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
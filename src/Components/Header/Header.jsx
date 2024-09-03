import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/jobs'>Jobs</NavLink></li>
        <li><NavLink to={`/applied`}>Applied Jobs</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>



    return (
       <div className="bg-[#F9F9FF]">
             <div className="navbar container mx-auto ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-3xl">
                        {links}
                    </ul>
                </div>
                <a className=" text-3xl font-bold">
                <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725280975/CareerHub_b6cpvs.png" alt="" />
                </a>
             
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {links}
                   
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-warning">Star Applying</a>
            </div>
        </div>
       </div>
    );
};

export default Header;
import {NavLink} from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
        <div className="">
            <nav className="flex justify-between items-center py-6">
                <Logo></Logo>
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
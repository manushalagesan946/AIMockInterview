import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, History, User, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

function Navbar() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    function handleLogout(){

        logout();

        navigate("/login");

    }

    const navItems=[

        {
            name:"Dashboard",
            path:"/dashboard",
            icon:<LayoutDashboard size={18}/>
        },

        {
            name:"History",
            path:"/history",
            icon:<History size={18}/>
        },

        {
            name:"Profile",
            path:"/profile",
            icon:<User size={18}/>
        }

    ];

    return(

        <header className="bg-white border-b">

            <div className="max-w-7xl mx-auto px-8 h-16 flex justify-between items-center">

                <h1 className="text-2xl font-bold text-blue-600">

                    AI Mock Interview

                </h1>

                <nav className="flex items-center gap-3">

                    {

                        navItems.map(item=>(

                            <Link

                                key={item.path}

                                to={item.path}

                                className={`
                                    flex items-center gap-2
                                    px-4 py-2
                                    rounded-lg
                                    transition

                                    ${
                                        location.pathname===item.path

                                        ?

                                        "bg-blue-600 text-white"

                                        :

                                        "hover:bg-gray-100"

                                    }
                                `}

                            >

                                {item.icon}

                                {item.name}

                            </Link>

                        ))

                    }

                </nav>

                <div className="flex items-center gap-5">

                    <div className="text-right">

                        <p className="font-semibold">

                            {user?.name}

                        </p>

                        <p className="text-sm text-gray-500">

                            {user?.email}

                        </p>

                    </div>

                    <motion.button

                        whileHover={{scale:1.05}}

                        whileTap={{scale:0.95}}

                        onClick={handleLogout}

                        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg"

                    >

                        <LogOut size={18}/>

                    </motion.button>

                </div>

            </div>

        </header>

    );

}

export default Navbar;
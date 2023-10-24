import "./SideNav.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdPeopleAlt } from "react-icons/md";

const sideLinks = [
    {
        path: "/",
        name: "Dashboard",
        icon: <MdDashboard />
    },
    {
        path: "/employees",
        name: "Employees",
        icon: <MdPeopleAlt />
    },
];

const SideNav = () => {
    const [onMountPath] = useState(`/${window.location.pathname.split("/")[1]}`);
    const [linkSelected, setLinkSelected] = useState();

    useEffect(() => {
        let pathExist = sideLinks.find(e => e.path === onMountPath)

        if (linkSelected === undefined && pathExist) {
            setLinkSelected(pathExist.path);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="sidenav">
                <div className="brand-container">
                    <Link className="brand" to="/">
                        <span>HR</span>net
                    </Link>
                    <p>Employee Management System</p>
                </div>

                <div className="links">
                    {
                        sideLinks.map((e, i) => {
                            return (
                                <Link className={(linkSelected === e.path) ? "link-active" : null} onClick={() => setLinkSelected(e.path)} key={`link-${i}`} to={e.path}>
                                    {e.icon}
                                    {e.name}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
        
    );
}

export default SideNav;
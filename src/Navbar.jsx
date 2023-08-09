import 'bulma/css/bulma.min.css';
import { useState, useEffect } from 'react';


const Navbar = () => {
    const [currentPage, setCurrentPage] = useState('');
    // const [isProjectsPage, setIsProjectsPage] = useState(false);

    useEffect(() => {
        setCurrentPage(window.location.pathname);
        // setIsProjectsPage(window.location.pathname === '/projects/speccheck' || window.location.pathname === '/projects/gptloop');
    }, []);

    const isActive = (href) => {
        return href === currentPage ? 'is-active' : '';
    };
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">


                    <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                                Menu
                            </div>
                            <div className="navbar-dropdown">
                                <div><a href="/" className={`navbar-item ${isActive('/david-curtin/')}`}>
                                    Home/Projects
                                </a></div>


                                {/* <div>
                                    {isProjectsPage && (
                                        <ul>
                                            <li>
                                                <a href="/projects/gptloop" className={`navbar-item ${isActive('/projects/gptloop')}`} style={{ "margin-left": 5, "font-size": 12 }}>
                                                    GPTLoop
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/projects/speccheck" className={`navbar-item ${isActive('/projects/speccheck')}`} style={{ "margin-left": 5, "font-size": 12 }}>
                                                    SpecCheck
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </div> */}

                                <div><a href="/music" className={`navbar-item ${isActive('/david-curtin/music')}`}>
                                    Music
                                </a></div>

                                <div><a href="/contact" className={`navbar-item ${isActive('/david-curtin/contact')}`}>
                                    Contact
                                </a></div>


                            </div>
                        </div>
                    </div>
                </div>


            </nav>
        </div>



    )
}

export default Navbar;

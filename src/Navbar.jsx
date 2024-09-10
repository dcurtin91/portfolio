import 'bulma/css/bulma.min.css';
import { useState, useEffect } from 'react';
import { faInstagramSquare, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'


const Navbar = () => {
    const [currentPage, setCurrentPage] = useState('');


    useEffect(() => {
        setCurrentPage(window.location.pathname);
        
    }, []);

    const isActive = (href) => {
        return href === currentPage ? 'is-active' : '';
    };

    const github =
    <a href="https://github.com/dcurtin91" title="github" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className='socials' />
    </a>

    const instagram =
    <a href="https://www.instagram.com/hifun13skateboard/" title="instagram" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagramSquare} className='socials' />
    </a>

    const linkedin =
    <a href="https://www.linkedin.com/in/david-curtin-ba104649/" title="linkedin" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className='socials' />
    </a>

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
                <section>
            <div >
                <div>

                </div>
                <div className="social-icons" aria-hidden="true">
                    {github}

                    {instagram}

                    {linkedin}
                </div>
            </div>
        </section>

            </nav>
        </div>



    )
}

export default Navbar;

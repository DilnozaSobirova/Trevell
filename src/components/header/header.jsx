import React, { useState, } from 'react';

import './header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <div className="header-secsion" >
            <div className="logo">
                <h2>
                    Travello
                </h2 >
            </div >
            <ul className="pages">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Tours</a></li>
                <li><a href="#">Сontact</a></li>
            </ul>
            <div className="language">
                <button>UZ</button>
                <button>EN</button>
                <button>RU</button>
            </div>

            <button className="bars" onClick={openModal} >
                <i class="fa-solid fa-bars"></i>
            </button>
            {
                isOpen && (

                    <div className='nav-bar'>
                        <nav className="modal">
                            <ul className="pagess">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Tours</a></li>
                                <li><a href="#">Сontact</a></li>
                            </ul>
                            <div className="languagee">
                                <button>UZ</button>
                                <button>EN</button>
                                <button>RU</button>
                            </div>
                            <button className="close" onClick={closeModal}  >
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </nav>
                        <div className="modal-overlay" onClick={closeModal}></div>
                    </div>

                )}

        </div >
    )
}

export default Header

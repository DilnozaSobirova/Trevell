import React from 'react'
import "./offers.css";
import Miami from "../../images/miami.svg";
import Japan from "../../images/yapon.svg";
import Dubai from "../../images/dubai.svg";
import Tajmahal from "../../images/taj-mahal.svg";
import Newyork from "../../images/newyork.svg";
import Greece from "../../images/greece.svg";


const Offers = () => {
    return (
        <section className='off' >
            <h4 className='coming'>
                Upcoming Offers
            </h4>
            <div className="rss">
                <div className='rs'>

                    <div className="boxx-one">
                        <div className="miami">
                            <p className="bach">
                                Miami Beaches
                            </p>
                            <img src={Miami} />
                            <div className="chill">
                                <button>
                                    Chill
                                </button>
                                <p>2 Days, 1 Nights</p>
                                <p>
                                    20.5.2023
                                </p>
                            </div>
                            <div className='pers'>
                                <p>
                                    850$<mark>/Person</mark>
                                </p>
                                <button>
                                    Book Now
                                </button>
                            </div>
                        </div>
                        <div className="miami">
                            <p className="bach">
                                Japan
                            </p>
                            <img src={Japan} />
                            <div className="chil">
                                <button className='relax'>
                                    Relax
                                </button>
                                <p>2 Days, 1 Nights</p>
                                <p>
                                    20.5.2023
                                </p>
                            </div>
                            <div className='pers'>
                                <p>
                                    1200$<mark>/Person</mark>
                                </p>
                                <button>
                                    Book Now
                                </button>
                            </div>
                        </div>
                        <div className="miami">
                            <p className="bach">
                                Dubai
                            </p>
                            <img src={Dubai} />
                            <div className="chill">
                                <button>
                                    Chill
                                </button>
                                <p>2 Days, 1 Nights</p>
                                <p>
                                    20.5.2023
                                </p>
                            </div>
                            <div className='pers'>
                                <p>
                                    500$<mark>/Person</mark>
                                </p>
                                <button>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="boxx-one">
                        <div className="miami">
                            <p className="bach">
                                Taj-Mahal
                            </p>
                            <img src={Tajmahal} />
                            <div className="chil">
                                <button className='relax'>
                                    Relax
                                </button>
                                <p>2 Days, 1 Nights</p>
                                <p>
                                    20.5.2023
                                </p>
                            </div>
                            <div className='pers'>
                                <p>
                                    350$<mark>/Person</mark>
                                </p>
                                <button>
                                    Book Now
                                </button>
                            </div>
                        </div>
                        <div className="miami">
                            <p className="bach">
                                New York
                            </p>
                            <img src={Newyork} />
                            <div className="chill">
                                <button>
                                    Chill
                                </button>
                                <p>2 Days, 1 Nights</p>
                                <p>
                                    20.5.2023
                                </p>
                            </div>
                            <div className='pers'>
                                <p>
                                    500$<mark>/Person</mark>
                                </p>
                                <button>
                                    Book Now
                                </button>
                            </div>
                        </div>

                        <div className="miami">
                            <p className="bach">
                                Greece
                            </p>
                            <img src={Greece} />
                            <div className="chil">
                                <button className='relax'>
                                    Relax
                                </button>
                                <p>2 Days, 1 Nights</p>
                                <p>
                                    20.5.2023
                                </p>
                            </div>
                            <div className='pers'>
                                <p>
                                    950$<mark>/Person</mark>
                                </p>
                                <button>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers

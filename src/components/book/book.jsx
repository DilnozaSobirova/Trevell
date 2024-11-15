import React from 'react'
import './book.css'
const Book = () => {
    return (
        <div>
            <div className="metro">
                <div className="metro-header">
                    <p>Book your preferred offer here</p>
                    <h1>Place Your Order</h1>
                    <button>Learn More</button>
                </div>
                <div className='res-cars'>
                    <div className="contact-info"  >
                        <div className="contact-card">
                            <div className='phone'>
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <h6>Make a phone call</h6>
                            <p>+998 00 000 00 00</p>
                        </div>
                        <div className="contact-card">
                            <div className='phone'>
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <h6>Email</h6>
                            <p>name@gmail.com</p>
                        </div>
                        <div className="contact-card">
                            <div className='phone'>
                                <i class="fa-solid fa-city"></i>
                            </div>
                            <h6>Visit our offices</h6>
                            <p>city, Tashkent</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Book

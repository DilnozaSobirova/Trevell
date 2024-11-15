import React from 'react'
import "./train.css";
import Toshkent from "../../images/toshkent.jpg"
const Train = () => {
    return (
        <section className='tr-res'>
            <section className='tr'>

                <div className="text-tr">
                    <h1>
                        High-speed rail in Uzbekistan
                    </h1>
                    <p>The Tashkent–Bukhara high-speed rail line is a <br /> 600-kilometre (373 mi)
                        high-speed rail <br /> connection between Tashkent and Bukhara, <br /> two major cities
                        in Uzbekistan. The route passes <br />
                        through six regions: Tashkent, Sirdaryo, Jizzakh, <br />
                        Samarqand, Navoiy, and Bukhara in Uzbekistan.
                    </p>
                    <button>
                        Even more
                    </button>
                </div>
                <div>
                    <img src={Toshkent} className='tosh' />
                </div>
            </section>
        </section>
    )
}

export default Train

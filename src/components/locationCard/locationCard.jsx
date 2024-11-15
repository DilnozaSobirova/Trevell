import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./locationCard.css";

const LocationCard = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "https://maps.app.goo.gl/g5x35FRF1P1WewYJ9", // API kalitingizni bu yerga joylashtiring
    });

    const center = { lat: 41.2995, lng: 69.2401 }; // Tashkent koordinatalari
    const markerPosition = { lat: 41.2995, lng: 69.2401 }; // Markerning joylashuvi

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <section className="res-lod">
            <div className="load">
                <div className="location-card-container">
                    <div>
                        <iframe className="harita" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.8398712116!2d69.11455620810692!3d41.2827379463425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1731413508977!5m2!1sru!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="map-container">
                        <GoogleMap
                            zoom={10}
                            center={center}
                            mapContainerClassName="map"
                        >
                            <Marker position={markerPosition} />
                        </GoogleMap>
                    </div>
                </div>
                <div className="booking-form-container">
                    <h2>
                        Complete your <span>booking</span> through this <span>form</span>
                    </h2>
                    <form className="booking-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="For example, John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Your Phone Number</label>
                                <input type="text" placeholder="For example, +xxx xxx xxx" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Number of Guests</label>
                                <input type="text" placeholder="For example, 3" />
                            </div>
                            <div className="form-group">
                                <label>Check-in Date</label>
                                <input type="date" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Select Your Destination</label>
                            <select>
                                <option value="antalya">Antalya</option>
                                <option value="paris">Paris</option>
                                <option value="newyork">New York</option>
                                <option value="japan">Japan</option>
                                <option value="dubai">Dubai</option>
                                <option value="gretca">Greece</option>
                            </select>

                        </div>
                        <div className="form-group">
                            <label>Select Your Visa Support</label>
                            <select>
                                <option value="country">Country</option>
                                <option value="none">None</option>
                                <option value="standard">Standard</option>
                                <option value="premium">Premium</option>
                            </select>
                        </div>
                        <button type="submit">Book Now</button>
                    </form>
                </div>
            </div>
        </section>

    );

};

export default LocationCard;

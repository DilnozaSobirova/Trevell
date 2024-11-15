import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
    const [loading, setLoading] = useState(true); // Yuklanish holati

    useEffect(() => {
        // 3 soniya davomida loaderni ko'rsatamiz
        const timer = setTimeout(() => {
            setLoading(false); // Loaderni o'chirish
        }, 2000);

        return () => clearTimeout(timer); // Timerni tozalash
    }, []);

    return (
        <div>
            {/* Loader */}
            {loading && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(255,112,67, 1)",
                        zIndex: 1000,
                    }}
                >
                    <ClipLoader color="#3498db" size={50} />
                </div>
            )}
        </div>
    );
};

export default Loader;

"use client"

import { useEffect, useState } from "react";

export default function WorkInProgress() {
    const [dots, setDots] = useState('.');

    useEffect(() => {
        const interval = setInterval(() => {
        if (dots === '...') {
            setDots('.');
        } else {
            setDots(dots + '.');
        }
        }, 500); // Ajuste la vitesse de l'animation ici (en millisecondes)
        
        return () => clearInterval(interval);
    }, [dots]);
    return (
        <p>Work in progress{dots}</p>
    )
}
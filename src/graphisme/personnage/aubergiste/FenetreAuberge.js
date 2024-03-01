import React, { useState, useEffect } from 'react';
import './fenetreAuberge.css';
import '../../../css/classe/fenetre1.css';

const FenetreAuberge = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const centerWindow = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const dialogWidth = 50;
        const dialogHeight = 30;

        setPosition({
            x: (windowWidth - dialogWidth) / 2,
            y: (windowHeight - dialogHeight) / 2,
        });
        };

        centerWindow();
        window.addEventListener('resize', centerWindow);

        return () => {
        window.removeEventListener('resize', centerWindow);
        };
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;

        setPosition({
            x: position.x + deltaX,
            y: position.y + deltaY,
        });

        setDragStart({ x: e.clientX, y: e.clientY });
        }
    };
    
    return (
        <div 
            className='FenetreStockage fenetre2Classe'
            style={{
                position: 'absolute',
                left: `${position.x - 320}px`,
                top: `${position.y - 330}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
        
        </div>
    )
}

export default FenetreAuberge
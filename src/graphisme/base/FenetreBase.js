import React, {useState, useEffect} from 'react';

import './fenetreBase.css';
import '../../css/classe/fenetreDrag.css';

const FenetreBase = ({ id, type, nom, img, description, valeur, poid, action, x, y }) => {



    // ==================== DECLARATION VARIABLE ==================== //
    console.log('ghbfvdc')



    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });



    // ==================== FENETRE BOUGEABLE ==================== //
    


    useEffect(() => {
        // Centrer la fenêtre initialement
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
            className='FenetreBase fenetreDrag'
            style={{
                position: 'absolute',
                left: `${position.x - 600}px`,
                top: `${position.y - 330}px`,
                width: '130vh',
                height: '70vh',
            }}
        >
        </div>
    )
}

export default FenetreBase
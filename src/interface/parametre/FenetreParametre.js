import React, {useState, useEffect} from 'react';

import './fenetreParametre.css';
import '../../css/classe/fenetreDrag.css';

import parametreStore from '../../variableGlobal/global/parametreStore';

const FenetreParametre = () => {



    // ==================== DECLARATION VARIABLE ==================== //



    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const storeParametre = parametreStore();

    const [bruitageVolume, bruitageVolumeSet] = useState(storeParametre.volumeBruitage);
    const [bruitage, bruitageSet] = useState(storeParametre.bruitage);
    const [musique, musiqueSet] = useState(storeParametre.musique);
    const [volumeMusique, volumeMusiqueSet] = useState(storeParametre.volumeMusique);
    


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
    
    const changerBruitage = () => {
        if (bruitage === 'oui') {
            storeParametre.modifier('bruitage', 'non');
            bruitageSet('non');
        } else {
            storeParametre.modifier('bruitage', 'oui');
            bruitageSet('oui');
        }
    }

    return (
        <div 
            className='FenetreParametre'
            style={{
                position: 'absolute',
                left: `${position.x - 600}px`,
                top: `${position.y - 330}px`,
                width: '130vh',
                height: '70vh',
            }}
        >
            <div className="listeParametre">
                <div className="bruitage parametre">
                    <p>Bruitage</p>
                    {/*
                    <p>Volume : {bruitageVolume}</p>
                    {bruitage === 'oui' ? (
                        <input type="checkbox" defaultChecked onClick={() => {changerBruitage();}}/>
                    ) : <input type="checkbox" onClick={() => {changerBruitage();}}/> }
                    */}
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={bruitageVolume}
                        onChange={(e) => {bruitageVolumeSet(e.target.value); storeParametre.modifier('volumeBruitage', e.target.value)}}
                    />
                </div>
                <div className="bruitage parametre">
                    <p>Musique</p>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={volumeMusique}
                        onChange={(e) => {volumeMusiqueSet(e.target.value); storeParametre.modifier('volumeMusique', e.target.value)}}
                    />
                </div>
            </div>
        </div>
    )
}

export default FenetreParametre
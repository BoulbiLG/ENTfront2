import React from 'react';

const Jauge = ({ valeur, max, couleur, fond, titre, solo, dimension }) => {
    
    var style;

    if (dimension === 'oui') {
        style = {
            display: 'flex', flexDirection: 'column', width: '300px', margin: '1vh 0'
        }
    } else if (dimension === 'non') {
        style = {
            display: 'flex', flexDirection: 'column', margin: '1vh 0'
        }
    } else {
        style = {
            display: 'flex', flexDirection: 'column', width: '100%', margin: '1vh 0'
        }
    }

    let taux = valeur * 100 / max;

    if (taux <= 0) {
        taux = 0;
    }

    return (
        <div style={style}>
            {solo === 'non' ? (
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>{titre}</p>
                    <p>{valeur >= 0 ? valeur : 0} / {max}</p>
                </div>
            ) : null }
                <div>
                <div style={{
                    height: '10px',
                    width: '100%',
                    borderRadius: '1vh',
                    overflow: 'hidden',
                    boxShadow: '4px 4px 0px black',
                    backgroundColor: fond
                }}>
                    <div style={{
                        height: '100%',
                        width: `${taux}%`,
                        backgroundColor: couleur
                    }}></div>
                </div>
            </div>
        </div>
    );
};

export default Jauge;
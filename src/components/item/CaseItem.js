import React from 'react';

import './caseItem.css';

const CaseItem = ({ img, id, onClick, x, y, quantite, equipe }) => {
    let style = {};

    const height = '60px';
    const width = '60px';
    if (x) {
        if (y) {
            if(quantite === equipe) {
                style = {
                    cursor: 'pointer',
                    width: width,
                    height: height,
                    position: 'absolute',
                    border: '1px solid black',
                    filter: 'brightness(80%)',
                    left: x,
                    top: y,
                };
            } else {
                style = {
                    cursor: 'pointer',
                    width: width,
                    height: height,
                    position: 'absolute',
                    left: x,
                    top: y,
                };
            }
        }
    } else {
        if(quantite === equipe) {
            style = {
                cursor: 'pointer',
                width: width,
                height: height,
                border: '1px solid black',
                filter: 'brightness(80%)',
            };
        } else {
            style = {
                cursor: 'pointer',
                width: width,
                height: height,
            };
        }
    }

    const styleConteneur = {
        margin: '1vh',
    }

    return (
        <>
        <div className='CaseItem' style={styleConteneur}>
            { img !== '' ? (
            <div className="case" onClick={onClick} style={style}>

                {/* ========== INVENTAIRE ========== */}

                    <img src={img} alt={img} style={{height: '50px', width: 'auto'}} />
                    {quantite > 1 ? (
                        <div className="quantite" style={{
                            position: 'absolute',
                            bottom: '-1vh',
                            right: '-1vh',
                        }}>
                            <p>{quantite}</p>
                        </div>
                    ) : null }
            </div>
            ) : null }
        </div>
        </>
    );
};

export default CaseItem;
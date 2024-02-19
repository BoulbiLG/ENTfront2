import React from 'react';

import './caseItem.css';

import { pommeURL, epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../../graphisme/item/item';

const CaseItem = ({ img, onClick, x, y, quantite, equipe }) => {
    
    let style = {};

    if (x) {
        if (y) {
            if(quantite === equipe) {
                style = {
                    cursor: 'pointer',
                    width: '50px',
                    height: '50px',
                    position: 'absolute',
                    border: '1px solid black',
                    filter: 'brightness(80%)',
                    left: x,
                    top: y,
                };
            } else {
                style = {
                    cursor: 'pointer',
                    width: '50px',
                    height: '50px',
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
                width: '50px',
                height: '50px',
                border: '1px solid black',
                filter: 'brightness(80%)',
            };
        } else {
            style = {
                cursor: 'pointer',
                width: '50px',
                height: '50px',
            };
        }
    }

    const styleConteneur = {
        margin: '1vh',
    }

    let URL = '';

    if (img === 'pomme') {URL = pommeURL}
    if (img === 'epee') {URL = epeeURL}
    if (img === 'bouclier') {URL = bouclierURL}
    if (img === 'casque') {URL = casqueURL}
    if (img === 'plastron') {URL = plastronURL}
    if (img === 'jambiere') {URL = jambiereURL}
    if (img === 'epauliere') {URL = epauliereURL}
    if (img === 'nike') {URL = nikeURL}

    return (
        <>
        <div className='CaseItem' style={styleConteneur}>
            { URL !== '' ? (
            <div className="case" onClick={onClick} style={{
                position: 'relative',
            }}>

                {/* ========== INVENTAIRE ========== */}

                    <img src={URL} alt={img} style={style} />
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
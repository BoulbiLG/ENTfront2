import React from 'react';

import './item.css';

import { lexiqueArme } from '../../variableGlobal/item/lexiqueArme';
import { lexiqueArmure } from '../../variableGlobal/item/lexiqueArmure';
import { lexiqueBadge } from '../../variableGlobal/item/badge/lexiqueBadge';
import { lexiqueConsomable } from '../../variableGlobal/item/lexiqueConsomable';

import { pommeURL, epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../../graphisme/item/item';
import kippa from '../../asset/item/armure/kippa.png';

const Item = ({ img, onClick, x, y, quantite, equipe, id }) => {
    
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

    let tableauItem = []

    console.log('img : ', img);

    if (!img) {
        console.log('issou deja');
        tableauItem.push(lexiqueArme);
        tableauItem.push(lexiqueArmure);
        tableauItem.push(lexiqueBadge);
        tableauItem.push(lexiqueConsomable);

        console.log('tableauItem : ', tableauItem);
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
    if (id === 'kippa') {URL = kippa}

    return (
        <div className='itemConteneur' style={styleConteneur}>
            { URL !== '' ? (
            <div className="case" onClick={onClick} style={{
                position: 'relative',
            }}>

                {/* ========== NORMAL ========== */}

                <img src={URL} alt={img} style={style} />
                {quantite > 1 ? (
                    <div className="quantite" style={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        color: 'black',
                        padding: '0.3vh 0.8vh',
                        bottom: '-1vh',
                        right: '-1vh',
                        borderRadius: '5vh',
                        border: '1px solid black',
                    }}>
                        <p>{quantite}</p>
                    </div>
                    
                ) : null }
            
            </div>
            ) : null }
        </div>
    );
};

export default Item;
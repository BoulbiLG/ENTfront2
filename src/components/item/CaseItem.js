import React from 'react';

import './caseItem.css';

import { lexiqueArme } from '../../variableGlobal/item/lexiqueArme';
import { lexiqueArmure } from '../../variableGlobal/item/lexiqueArmure';
import { lexiqueBadge } from '../../variableGlobal/item/badge/lexiqueBadge';
import { lexiqueConsomable } from '../../variableGlobal/item/lexiqueConsomable';

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

    let tableauItem = []

    if (!img) {
        //console.log('issou deja');
        tableauItem.push(lexiqueArme);
        tableauItem.push(lexiqueArmure);
        tableauItem.push(lexiqueBadge);
        tableauItem.push(lexiqueConsomable);

        //console.log('tableauItem : ', tableauItem);

        for (let i = 0; i < tableauItem.length; i++) {
            const element = tableauItem[i];
            for (const key in element) {
                if (Object.hasOwnProperty.call(element, key)) {
                    const objet = element[key];
                    //console.log('id : ', id, ' = object.id : ', objet.id);
                    if (objet.id === id) {
                        img = objet.img;
                        //console.log('objet.img : ', objet.img);
                    }
                }
            }
        }
    }

    //console.log('img : ', img);

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
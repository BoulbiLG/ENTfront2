import { useState, useEffect } from 'react';
import create from 'zustand';

export const useDynamicStore = (storeName) => {
    const [dynamicStore, setDynamicStore] = useState(null);
    
    useEffect(() => {
            const loadDynamicStore = async () => {
            try {
                const dynamicStoreModule = (await import(`./personnage/${storeName}Store`)).default()
                console.log(dynamicStoreModule)
            } catch (error) {
                console.error(`Erreur lors du chargement du store dynamique ${storeName}:`, error);
            }
        };

        loadDynamicStore();
    }, [storeName]);

    return dynamicStore;
};

"use client";

import { useEffect } from 'react';

const StorageData = () => {
    useEffect(() => {
        const initialEmails = ['user1@example.com', 'user2@example.com', 'user3@example.com'];
        
        if (!localStorage.getItem('registeredEmails')) {
            localStorage.setItem('registeredEmails', JSON.stringify(initialEmails));
        }
   

    }, []);

    return null; 
};

export default StorageData;

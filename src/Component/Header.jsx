
import CurrentDateTime from "./CurrentDateTime";
import ThemeToggle from "./ThemeToggle";
import { collection, setDoc, updateDoc, getDoc, doc, increment, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import React, { useState, useEffect } from 'react';
import moment from "moment";

export function AppHeader() {

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

    const docRef = doc(collection(db, "user_traffic"), formattedDate);

    const enterTraffic = async () => {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            // Document for today already exists, update the value by 1
            await updateDoc(docRef, {
                [formattedDate]: increment(1),
            });
        } else {
            // Document for today doesn't exist, create a new one with value 1
            await setDoc(docRef, {
                [formattedDate]: 1,
            });
        }
    }

    const [ipAddress, setIpAddress] = useState("");

    async function fetchIpAddress() {
        try {
            const response = await fetch("https://api.ipify.org?format=json");
            const data = await response.json();
            setIpAddress(data.ip);

            const docRef = await addDoc(collection(db, "traffic_ip"), {
                ip_address: data.ip,
                time: moment().format("YYYY-MM-DD HH:mm:ss")
            });
        } catch (error) {
            console.error("Error fetching IP address:", error);
        }
    }

    useEffect(() => {
        console.log("EnterTraffic");
        enterTraffic();
        fetchIpAddress();
    }, [])





    return (
        <div className="grid">
            <header className='sticky top-0 z-40 w-full border-b bg-background'>
                <div className=' flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
                    <h1 className="px-2 text-xl">Ramadan 2024</h1>
                    <div className='flex flex-1 items-center justify-end space-x-4'>
                        <nav className='flex items-center space-x-1'>
                            <CurrentDateTime />
                            <ThemeToggle />
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}
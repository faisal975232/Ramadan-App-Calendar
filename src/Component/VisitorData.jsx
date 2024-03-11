import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const VisitorData = () => {
    const [data, setData] = useState("");




    const getUserTrafficData = async () => {
        await getDocs(collection(db, "user_traffic")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setData(newData);
            console.log(newData);
        });
    };


    useEffect(() => {
        console.log("Get Traffic");
        getUserTrafficData();
    }, [])


    return (
        <div className='mx-4 my-4'>
            <Table>
                <TableCaption>A list of Traffic of by date.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead >Date</TableHead>
                        <TableHead>No. of Visitors</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.length > 0 && data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item[item.id]}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
        </div>
    );
};

export default VisitorData;
import data from "./Ramadan.json"
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const TodayTimings = () => {
    const currentDate = new Date(); // Get the current date

    const [todaysData, setTodaysData] = useState("");

    const formattedCurrentDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    // Check if the current date is in the array


    useEffect(() => {
        const matchingDate = data.find(item => item.date === formattedCurrentDate);

        if (matchingDate) {
            setTodaysData(matchingDate);
        } else {
        }
    }, [formattedCurrentDate]);


    return (
        <div>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Todays Ramadan Schedule </CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                   

                    <div className="grid grid-cols-4 my-2 gap-4">
                        <div className="text-xs font-bold">Todays Date</div>
                        <div className="text-xs font-bold">
                            {todaysData &&   moment(todaysData.date).format('DD-MM-YYYY')}
                        </div>

                        <div className="text-xs font-bold">Day</div>
                        <div className="text-xs font-bold">
                            {todaysData &&   moment(todaysData.date ).format('dddd')}
                        </div>
                    </div>

                    <hr />

                    <div className="grid grid-cols-4 my-2 gap-4">
                        <div className="text-xs font-bold">Sehri</div>
                        <div className="text-xs font-bold">
                            {todaysData && todaysData.sehri}
                        </div>

                        <div className="text-xs font-bold">Iftar</div>
                        <div className="text-xs font-bold">
                            {todaysData && todaysData.iftar}
                        </div>
                    </div>

                    <hr />

                    <div className="grid grid-cols-4 my-2 gap-4">
                        <div className="text-xs font-bold">Subha Sadik</div>
                        <div className="text-xs font-bold">
                            {" "}
                            {todaysData && todaysData.subha_sadik}
                        </div>

                        <div className="text-xs font-bold">Hijri Date</div>
                        <div className="text-xs font-bold">
                        {todaysData && todaysData.hijri}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TodayTimings;
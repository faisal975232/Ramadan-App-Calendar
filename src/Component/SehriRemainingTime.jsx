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
import data from "./Ramadan.json"

const SehriRemainingTime = () => {



    const [todaysData, setTodaysData] = useState("");

    const currentDate = new Date(); // Get the current date

    // Format the current date to match the format in the array ("YYYY-MM-DD")
    const formattedCurrentDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    // Check if the current date is in the array


    useEffect(() => {
        const matchingDate = data.find(item => item.date === formattedCurrentDate);

        if (matchingDate) {
            setTodaysData(matchingDate);
        } else {
        }
    }, [formattedCurrentDate]);

    const calculateRemainingTime = (targetDate) => {
        const now = moment();
        const target = moment(targetDate);
        const duration = moment.duration(target.diff(now));

        const days = formatNumber(Math.abs(Math.floor(duration.asDays())));
        const hours = formatNumber(Math.abs(duration.hours()));
        const minutes = formatNumber(Math.abs(duration.minutes()));
        const seconds = formatNumber(Math.abs(duration.seconds()));

        const sign = duration.asSeconds() < 0 ? '-' : ''; // Check if duration is negative

        return { days, hours, minutes, seconds, sign };
    };

    const formatNumber = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };



    const [remainingTime, setRemainingTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const dateString = todaysData.date;
            const timeString = todaysData.sehri;
            const dateTimeString = dateString + " " + timeString;
            const createDate = new Date(dateTimeString);
            setRemainingTime(calculateRemainingTime(createDate));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [todaysData]);





    return (
        <div> {
            <Card className="w-full h-full">

                <CardContent className="flex items-center justify-center p-6">
                    <div className="grid w-full max-w-sm gap-1 text-center">
                      
                        <p className="font-semibold">  {remainingTime.sign === "" ? "Time remaining in Next Sehri" : "Sehri Ended"}</p>
                        {remainingTime.sign != undefined &&
                        <p className={`text-4xl  digitalfont py-4 ${remainingTime.sign === "" ? "text-green-600" : "text-red-500"}`}>   {remainingTime.hours > 0 && remainingTime.hours + ":"}  {remainingTime.minutes + ":"} {remainingTime.seconds}</p>
                        }
                    </div>
                </CardContent>
            </Card>
        }
        </div>
    );
};

export default SehriRemainingTime;
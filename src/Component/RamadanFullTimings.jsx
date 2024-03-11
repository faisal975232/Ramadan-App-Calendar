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
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RamadanFullTimings = () => {


    return (
        <div>
            <div className='text-center'>
            <Link to="/">   <Button className="my-4">  Back </Button></Link>
            </div>
            <h5 className="text-xl font-semibold text-center py-3">Ramadan Full Schedule 2024</h5>
            <div className="grid grid-cols-1 md:grid-cols-4  gap-4  px-4 py-4">


                {data.length > 0 && data.map((todaysData) => (
                    <Card className="w-full my-3" key={todaysData.hijri}>
                        <CardHeader>
                            <CardTitle>  </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>


                            <div className="grid grid-cols-4 my-2 gap-4">
                                <div className="text-xs font-bold"> Date</div>
                                <div className="text-xs font-bold">
                                    {todaysData && moment(todaysData.date).format('DD-MM-YYYY')}
                                </div>

                                <div className="text-xs font-bold">Day</div>
                                <div className="text-xs font-bold">
                                    {todaysData && moment(todaysData.date).format('dddd')}
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
                ))}

            </div>
        </div>
    );
};

export default RamadanFullTimings;
import React from 'react';
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
import { Badge } from "@/components/ui/badge"

const RamadanButton = () => {
    return (
        <div>
            <Link to="/ramadan_full_schedule">
                <Card className="w-full h-full">
                    <CardContent className="flex items-center justify-center p-6">
                        <div className='text-center'>
                            <Badge variant="destructive">Click/Tap Here For Full Ramadan Schedule</Badge>
                            <h5 className='text-xl font-medium'>Ramadan Full Schedule</h5>
                            <h5 className='text-lg '>Whole month Schedule day by day</h5>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
};

export default RamadanButton;
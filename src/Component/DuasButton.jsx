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

const DuasButton = () => {
    return (
        <div>
            <Link to="/duas">
                <Card className="w-full h-full">

                    <CardContent className="flex items-center justify-center p-6">
                        <div className='text-center'>
                           <h5 className='text-xl font-medium'>Duas</h5> 
                           <h5 className='text-lg '>Important Ramadan Duas</h5> 
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
};

export default DuasButton;
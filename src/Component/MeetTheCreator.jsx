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


const MeetTheCreator = () => {
    return (
        <div>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Meet The Creator </CardTitle>
                    <CardDescription>Connect with me for Feedback or If you need a website</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center">

                        <img src="/faispassal.jpg" alt="@shadcn" className='rounded w-24' />


                    </div>


                    <div className="flex justify-center my-3">
                        <h2 className='text-xl font-medium'>Syed Faisal Ali</h2>
                    </div>


                    <div className='text-center'>
                        <Button className="my-4"><Link to="https://www.instagram.com/faisal975232/">Connect </Link></Button>
                    </div>



                </CardContent>
            </Card>
        </div>
    );
};

export default MeetTheCreator;
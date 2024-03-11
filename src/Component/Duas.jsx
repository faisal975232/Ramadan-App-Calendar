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

const Duas = () => {
    return (

        <div>
            <div className='text-center'>
                <Button className="my-4"><Link to="/">  Back </Link></Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4  gap-4 min-h-screen px-4 py-4">

                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Sehri ki Dua </CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>

                        <h5 className='py-2 text-4xl'>وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ</h5>

                        <hr />

                        <h5 className='py-2'>वा बिसव्मि ग़ादिन्न नवैयतु मिन शहरी रमदान</h5>

                        <hr />

                        <h5 className='py-2'>और मेरा इरादा कल रमज़ान के महीने में रोज़ा रखने का है.</h5>

                    </CardContent>
                </Card>


                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Iftar ki Dua </CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>

                        <h5 className='py-2 text-4xl'>اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ</h5>

                        <hr />

                        <h5 className='py-2'>अल्लाहुम्मा इन्नी लक सुम्तु वा अला रिज़्क-इक-अफ़्तर्तु</h5>

                        <hr />

                        <h5 className='py-2'>ऐ अल्लाह, बेशक मैंने तेरे लिए रोज़ा रखा , और तुझ पर ईमान लाया , और तेरे ही रिज़्क़ से इफ्तार किया</h5>

                    </CardContent>
                </Card>


                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Taraweeh ki Dua </CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>

                        <h5 className='py-2 text-4xl'>سُبْحَانَ ذِی الْمُلْکِ وَالْمَلَکُوْتِ * سُبْحَانَ ذِی الْعِزَّةِ وَالْعَظَمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ وَالْکِبْرِيَآئِ وَالْجَبَرُوْتِ * سُبْحَانَ الْمَلِکِ الْحَيِ الَّذِی لَا يَنَامُ وَلَا يَمُوْتُ سُبُّوحٌ قُدُّوْسٌ رَبُّنَا وَرَبُّ الْمَلَائِکَةِ وَالرُّوْحِ * اَللّٰهُمَّ اَجِرْنَا مِنَ النَّارِ يَا مُجِيْرُ يَا مُجِيْرُ يَا مُجِيْر۔</h5>

                        <hr />

                        <h5 className='py-2'>सुबहान ज़िल मुल्कि वल मलकूत, सुब्हान ज़िल इज्ज़ति वल अज़मति वल हय्बति वल कुदरति वल किबरियाई वल जबरूत, सुबहानल मलिकिल हैय्यिल लज़ी ला यनामु वला यमुतू सुब्बुहून कुददुसुन रब्बुना व रब्बुल मलाइकति वर रूह, अल्लाहुम्मा अजिरना मिनन नारि या मुजीरू या मुजीरू या मुजीर</h5>

                        <hr />

                        <h5 className='py-2'>पाक है वो अल्लाह जो मुल्क और बादशाहत वाला है | पाक है वो अल्लाह जो इज्ज़त वाला, और अज़मत वाला, और हैबत वाला, और कुदरत वाला, और बड़ाई वाला, और सतवत वाला है | पाक है वो अल्लाह जो बादशाह है, जिंदा रहने वाला है, के ना उसके लिए नींद है और ना मौत है, वो बे इन्तेहा पाक है, और बेइंतेहा मुक़द्दस है, हमारा परवरदिगार फरिश्तों और रूह का परवरदिगार है | ए अल्लाह जहन्नम की आग से हमें बचाना | ऐ बचाने वाले, ऐ पनाह देने वाले, ऐ निजात देने वाले |</h5>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Duas;
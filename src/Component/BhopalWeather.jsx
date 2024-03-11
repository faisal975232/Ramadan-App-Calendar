import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Button } from "@/components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import moment from "moment";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const BhopalWeather = () => {
    //getting all categories
    let DUMMY_CRED = [];
    const [weather, setweather] = useState(DUMMY_CRED);
    const [Bhopalweather, setBhopalweather] = useState("");
    const [dateWeather, setdateWeather] = useState("");
    const [pressure, setpressure] = useState("");
    const [wconditions, setwconditions] = useState("");

    const weatherURL =
        "https://api.openweathermap.org/data/2.5/weather?lat=23.2599&lon=77.4126&units=metric&appid=db03c04f01d9688eebdc0ca06a7c44a4";

    const getWeather = () => {
        fetch(weatherURL)
            .then((resp) => resp.json())
            .then((apidata) => {
                setBhopalweather(apidata);

                setwconditions(apidata.weather[0]);
            });
    };

    const baseURL =
        "https://api.openweathermap.org/data/2.5/forecast?lat=23.2599&lon=77.4126&appid=db03c04f01d9688eebdc0ca06a7c44a4&units=metric";

    const getWeatherForecast = () => {
        fetch(baseURL)
            .then((resp) => resp.json())
            .then((apidata) => {
                setweather(apidata.list);

                var date = [];
                const result = apidata.list.map((item, index) => {
                    date.push(
                        moment(item.dt_txt).add(19800, "seconds").format("DD MMMM")
                    );
                });

                var arr = date.filter(function (item, index, inputArray) {
                    return inputArray.indexOf(item) == index;
                });

                const uniqueArr = [];

                arr.forEach((element) => {
                    const x = {};
                    x.date = element;
                    const tempArr = [];

                    apidata.list.forEach((item, index) => {
                        if (
                            element ==
                            moment(item.dt_txt).add(19800, "seconds").format("DD MMMM")
                        ) {
                            const y = {};
                            y.dt = item.dt;
                            y.dt_txt = item.dt_txt;
                            y.main = item.main;
                            y.weather = item.weather;
                            tempArr.push(y);
                        }
                        x.data = tempArr;
                    });
                    uniqueArr.push(x);
                });

                setdateWeather(uniqueArr);
            });
    };

    useEffect(() => {
        getWeather();
        getWeatherForecast();
    }, []);
    return (
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Bhopal Weather </CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-4">
                        <div className="">
                            <h2 className="text-xs font-bold">
                                {Bhopalweather && Bhopalweather.name}
                            </h2>
                        </div>

                        <div className="">
                            <h2 className="text-xs font-bold">
                                {Bhopalweather && Bhopalweather.main.temp}°C
                            </h2>
                        </div>

                        <div className="">
                            <h2 className="text-xs font-bold">
                                {wconditions && wconditions.description.toUpperCase()}
                            </h2>
                        </div>

                        <div className="">
                            <img
                                src={`http://openweathermap.org/img/w/${wconditions.icon}.png`}
                                alt=""
                            />
                        </div>
                    </div>

                    <hr />

                    <div className="grid grid-cols-4 my-2">
                        <div className="text-xs font-bold">Temp</div>
                        <div className="text-xs font-bold">
                            {Bhopalweather && Bhopalweather.main.temp}°C
                        </div>

                        <div className="text-xs font-bold">Feels like</div>
                        <div className="text-xs font-bold">
                            {Bhopalweather && Bhopalweather.main.feels_like}°C
                        </div>
                    </div>

                    <hr />

                    <div className="grid grid-cols-4 my-2">
                        <div className="text-xs font-bold">Humidity</div>
                        <div className="text-xs font-bold">
                            {Bhopalweather && Bhopalweather.main.humidity}
                        </div>

                        <div className="text-xs font-bold">Pressure</div>
                        <div className="text-xs font-bold">
                            {Bhopalweather && Bhopalweather.main.pressure}
                        </div>
                    </div>

                    <hr />

                    <div className="grid grid-cols-4 my-2">
                        <div className="text-xs font-bold">Sunrise</div>
                        <div className="text-xs font-bold">
                            {" "}
                            {Bhopalweather &&
                                moment.unix(Bhopalweather.sys.sunrise).format("hh:mm a")}
                        </div>

                        <div className="text-xs font-bold">Sunset</div>
                        <div className="text-xs font-bold">
                            {Bhopalweather &&
                                moment.unix(Bhopalweather.sys.sunset).format("hh:mm a")}
                        </div>
                    </div>
                </CardContent>
            </Card>
    );
};

export default BhopalWeather;

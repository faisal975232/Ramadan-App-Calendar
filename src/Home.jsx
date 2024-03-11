
import BhopalWeather from "Component/BhopalWeather";
import IftarRemainingTime from "Component/IftarRemainingTime";
import SehriRemainingTime from "Component/SehriRemainingTime";
import TodayTimings from "Component/TodayTimings";
import RamadanButton from "Component/RamadanButton";
import MeetTheCreator from "Component/MeetTheCreator";


export default function Testing() {
  return (
    // <div className="flex flex-col items-center gap-4 min-h-screen px-4 py-4">
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-4  px-4 py-4">

        <TodayTimings />
        <BhopalWeather />
        <IftarRemainingTime />
        <SehriRemainingTime />
        <RamadanButton />
        {/* <DuasButton /> */}
        <MeetTheCreator />
      </div>
    </div>
  )
}



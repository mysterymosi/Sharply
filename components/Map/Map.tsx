import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { LocationIpnut } from "./LocationInput";

export const Map = ({ address, setAddress }: any) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY !== undefined
        ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        : "",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <TheMap address={address} setAddress={setAddress} />;
};

const TheMap = ({ address, setAddress }: any) => {
  const center = useMemo(() => ({ lat: 23.634501, lng: -102.552784 }), []);
  const [selected, setSelected] = useState({
    lat: 6.5243793,
    lng: 3.3792057,
  });
  const handleMarkerClick = (event: any) => {
    setSelected(event.latLng.toJSON());
  };
  return (
    <>
      <GoogleMap
        zoom={10}
        center={selected}
        mapContainerClassName="w-full h-[219px] rounded-[14px]"
      >
        {selected && <Marker position={selected} onClick={handleMarkerClick} />}
      </GoogleMap>
      {address && (
        <div className="bg-black1 mt-[10px] flex items-center py-[13px] px-[30px] rounded-[10px]">
          <img
            className="w-[17px] h-[20px]"
            src={"/images/location.png"}
            alt="logo"
          />

          <p className="text-white font-normal text-[15px] ml-[23px]">
            {address}
          </p>
        </div>
      )}
      <div className="flex items-center my-[29px]">
        <div className="border-2 h-[1px] border-grey7 border-solid basis-1/2"></div>
        <p className="text-black1 opacity-20 font-semibold text-xs mx-[25px] basis-1/10">
          or
        </p>
        <div className="border-2 h-[1px] border-grey7 border-solid basis-1/2"></div>
      </div>
      <LocationIpnut setAddress={setAddress} setSelected={setSelected} />
    </>
  );
};

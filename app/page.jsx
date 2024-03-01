// components/Page.jsx
import Weather from "./components/Weather";
import Image from "next/image";

function Page() {
  return (
    <div className="overflow-x-hidden overflow-y-scroll h-[100vh]">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/75 z-[1] h-full w-screen" />

      <Image
        src="/assets/images/weatherIma.jpg"
        fill={true}
        alt="Weather"
        quality={100}
        loading="lazy"
        className="object-cover h-[100vh] w[100vw]"
      />

      <Weather></Weather>
    </div>
  );
}

export default Page;

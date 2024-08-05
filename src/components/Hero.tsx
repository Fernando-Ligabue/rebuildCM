import { videoDeskSrc, videoMobileSrc } from "@/lib/constants";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 469 ? videoMobileSrc : videoDeskSrc);

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 469) {
            setVideoSrc(videoMobileSrc);
        } else {
            setVideoSrc(videoDeskSrc);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet);
        }
    }, [])

    return (
        <section id="home" className="w-full h-full bg-black flex flex-col justify-start items-center relative">
            <div className="w-full h-full">
                <video className="pointer-events-none" loop autoPlay muted playsInline={true} key={videoSrc}>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

export default Hero;
import { useEffect, useState } from "react";

type Image = {
    src: string,
    alt: string,
    title?: string,
    description?: string,
    buttonText?: string

}

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if(isPlaying){
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000);
          return () => clearInterval(interval);
        }
    }, [isPlaying]);

    const images:Image[] = [
        {
          src: "/pic1.avif",
          alt: "Background",
          title: "Meet Surface Pro",
          description: "This laptop's unrivalled flexibility and AI features like Recall and Cocreator, enable you to do more than you ever imagined.",
          buttonText: "Learn More"
        },
        {
          src: "/pic2.avif",
          alt: "Background",
          title:"Meet the lightning-fast Surface PCs",
          description:"Unlock next-gen AI features like Recall and Cocreator with this exceptionally powerful laptop.",
          buttonText:"Learn More"
        }
      ];

      const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) < 0 ? images.length - 1 : (prevIndex - 1 + images.length) % images.length);
      };
    
      const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };


  return (
    <>
        <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="min-w-full relative">
                      <img src={image.src} alt={image.alt} className="w-full h-auto" />
                      {image.title && (
                        <div className={`absolute top-36 left-0 ml-8 max-w-[35%] flex flex-col justify-center items-start p-8 bg-opacity-100 text-black ${index == 0? "bg-white":"bg-transparent"}`}>
                            <div className="text-black bg-[#ffb900] px-2 py-1 font-semibold">New</div>
                          <h1 className="text-3xl font-bold">{image.title}</h1>
                          <p className="mt-4">{image.description}</p>
                          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">{image.buttonText}</button>
                        </div>
                      )}
                    </div>
                ))}
            </div>
        </div>
        <div className="my-2 flex justify-center">
            {
                !isPlaying ? <button><img className="w-7" src="/play-circle-fill.svg" alt="Play Icon" onClick={()=>{setIsPlaying(true)}}/></button> 
                :
                <button><img className="w-7" src="/pause-circle-fillsvg.svg" alt="Pause Icon" onClick={()=>{setIsPlaying(false)}}/></button>
            }
            <button onClick={goToPrevious} className="mx-5"><img className="w-5" src="/left-arrow.svg" alt="" /></button>   
            <div className="bottom-0 py-4 flex justify-center gap-5">
                {
                    images.map((s,i)=>(
                        <div key={s.title} className={`rounded-full w-3 h-3 border border-black ${ i==currentIndex && "bg-black border-none"}`}></div>
                    ))
                }
            </div> 
            <button onClick={goToNext} className="mx-5"><img className="w-5" src="/right-arrow.svg" alt="" /></button>
        </div>
    </>
  )
}

export default Carousel
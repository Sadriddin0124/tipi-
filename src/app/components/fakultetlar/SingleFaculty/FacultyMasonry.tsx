import React from 'react'
import ImgLogo from "@/assets/img_logo.webp"
import Image from 'next/image'
const FacultyMasonry = () => {
  const images = [
    {
      id: 1,
      src: ImgLogo,
      alt: "Photo 1",
    },
    {
      id: 2,
      src: ImgLogo,
      alt: "Photo 2",
    },
    {
      id: 3,
      src: ImgLogo,
      alt: "Photo 3",
    },
    {
      id: 4,
      src: ImgLogo,
      alt: "Photo 4",
    },
    // {
    //   id: 5,
    //   src: ImgLogo,
    //   alt: "Photo 5",
    // },
  ]
  return (
    <div className={`grid ${images.length > 4 ? "grid-cols-6" : " grid-cols-2 sm:grid-cols-4 lg:grid-cols-8"} gap-3 md:gap-6`}>
      {images.map((image,index) => (
        <div key={image.id} className={`overflow-hidden rounded-[10px] max-h-[300px] md:max-h-[400px] ${ images.length > 4 && index === 0 || images.length > 4 && index === 1 ? " col-span-3" : " col-span-2"}`} >
          <Image src={image.src} alt={image.alt} className="hover:scale-105 transition-all w-full" />
        </div>
      ))}
    </div>
  )
}

export default FacultyMasonry

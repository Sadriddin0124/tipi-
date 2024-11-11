import React from 'react'
import ImgLogo from "@/assets/img_logo.webp"
import Image from 'next/image'
const FacultyMasonry = () => {
  const images = [
    {
      id: 1,
      src: ImgLogo,
      alt: "Photo 1",
      col: "col-span-3"
    },
    {
      id: 2,
      src: ImgLogo,
      alt: "Photo 2",
      col: "col-span-3"
    },
    {
      id: 3,
      src: ImgLogo,
      alt: "Photo 3",
      col: "col-span-2"
    },
    {
      id: 4,
      src: ImgLogo,
      alt: "Photo 4",
      col: "col-span-2"
    },
    {
      id: 5,
      src: ImgLogo,
      alt: "Photo 5",
      col: "col-span-2"
    },
  ]
  return (
    <div className='grid grid-cols-6 gap-6'>
      {images.map((image) => (
        <div key={image.id} className={`overflow-hidden rounded-[10px] max-h-[400px] ${image?.col}`} >
          <Image src={image.src} alt={image.alt} className="hover:scale-105 transition-all w-full" />
        </div>
      ))}
    </div>
  )
}

export default FacultyMasonry

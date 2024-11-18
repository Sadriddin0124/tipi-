import React from 'react'
import ImgLogo from "@/assets/img_logo.webp"
import Image1 from "@/assets/faculty_hero1.webp"
import Image2 from "@/assets/faculty_hero2.webp"
import Image3 from "@/assets/faculty_hero3.webp"
import Image4 from "@/assets/faculty_hero4.webp"
import Image from 'next/image'
const FacultyMasonry = () => {
  const images = [
    {
      id: 1,
      src: Image1,
      alt: "Photo 1",
    },
    {
      id: 2,
      src: Image2,
      alt: "Photo 2",
    },
    {
      id: 3,
      src: Image3,
      alt: "Photo 3",
    },
    {
      id: 4,
      src: Image4,
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
          <Image src={image.src} alt={image.alt} className="hover:scale-105 transition-all w-full h-[300px] object-cover" width={500} height={500}/>
        </div>
      ))}
    </div>
  )
}

export default FacultyMasonry

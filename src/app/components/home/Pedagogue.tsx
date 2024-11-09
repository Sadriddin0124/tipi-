"use client"
import React, { useEffect, useState } from 'react'
import PedagogueImg1 from "@/assets/pedagogue1.webp"
import PedagogueImg2 from "@/assets/pedagogue2.webp"
import PedagogueImg3 from "@/assets/pedagogue3.webp"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { LangType, PedagogueType } from '@/app/types/all.types'
import Link from 'next/link'
import UzFlag from "@/assets/uz.webp";
import RuFlag from "@/assets/ru.webp";
import EnFlag from "@/assets/en.webp";
import { usePathname } from 'next/navigation'
const Pedagogue = () => {
    const t = useTranslations()
    const data:PedagogueType[] = [
        {img: PedagogueImg1, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
    ]
    const pathname = usePathname();

    const languages: LangType[] = [
        { value: "uz", title: "Uz", icon: UzFlag },
        { value: "en", title: "En", icon: EnFlag },
        { value: "ru", title: "Ru", icon: RuFlag },
      ];
    
      const currentLanguage = pathname.split("/")[1];
      const filterLang = languages.find(item => item.value === currentLanguage) || languages[0];
      const [activeLang, setActiveLang] = useState<LangType>(filterLang);
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
    };
    useEffect(() => {
      Aos.init({
          duration: 1000,
          once: true, 
          easing: 'linear',
      });
  }, []);
  return (
    <section className='px-2' data-aos="fade-up">
      <div className='max-w-[1130px] mx-auto w-full'>
        <h2 className='text-[32px] text-center mb-10 md:mb-12 md:text-[40px] font-[600]'>{t("pedagogue.title")}</h2>
        <Slider {...settings}>
            {
                data?.map((item,index)=> {
                    return <div key={index} className='px-3 lg:px-5'>
                        <div className='shadow-md rounded-[10px] overflow-hidden'>
                          <Image src={item?.img} alt={item?.name} width={350} height={300} className='w-full'/>
                          <div className='p-5 flex flex-col items-start gap-[10px]'>
                              <h5 className='text-[20px] font-[600] lg:max-w-[160px]'>{item?.name}</h5>
                              <p className='text_main text-[18px] font-[600]'>{item?.desc}</p>
                              <Link href={`/${activeLang?.value}/pedagoglar`} className='hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]'>{t("pedagogue.btn")}</Link>
                          </div>
                      </div>
                    </div>
                })
            }
        </Slider>
      </div>
    </section>
  )
}

export default Pedagogue

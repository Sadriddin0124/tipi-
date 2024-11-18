"use client"
import React, { useState } from 'react'
import IT1 from "@/assets/it1.webp"
import IT2 from "@/assets/it2.webp"
import IT3 from "@/assets/it3.webp"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import ITImage from "@/assets/it.webp"
import { FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { usePathname } from 'next/navigation'
import EducatorImg from "@/assets/educator.webp"
import EducatorsCards from '../../educators/EducatorsCards'
import AboutFaculty from './AboutFaculty'
const Statistics = () => {
    const t = useTranslations()
    const [activeStatistic, setActiveStatistic] = useState<number>(1)
    const data = [
        {
            id: 1
,           title: t("information.statistics1"),
            icon: IT1,
            line: false
        },
        {
            id: 3
,           title: t("information.statistics2"),
            icon: IT2,
            line: true
        },
        {
            id: 2
,           title: t("information.statistics2"),
            icon: IT2,
            line: false
        },
        {
            id: 4
,           title: t("information.statistics2"),
            icon: IT2,
            line: true
        },
        {
            id: 3
,           title: t("information.statistics3"),
            icon: IT3,
            line: false
        },
    ]
    const changeStatistic = (id: number) => {
        setActiveStatistic(id)
    }
    
    const components = [
        {id: 1, component: <Faculties/>},
        {id: 2, component: <Kafedra/>},
        {id: 3, component: <OnlineReception/>},
    ]
  return (
    <section className='w-full flex flex-col items-center gap-3 md:gap-20 justify-center pt-[60px] lg:pt-[122px] pb-20 lg:pb-[100px] px-3' data-aos="fade-up">
        <div className='max-w-[1166px] w-full flex flex-row items-center md:border-0 border rounded-full justify-between md:justify-center lg:justify-between bg-slate-200 md:bg-transparent p-1 md:gap-3 lg:gap-8'>
            {
                data?.map((item,index)=> {
                    return ( item?.line ? 
                    <div className='hidden lg:block w-1 h-full bg_main min-h-[88px]' key={index}></div> : 
                    <button className={`${item?.id === activeStatistic ? "bg_main" : "hover:bg-[#404B7C] text_main md:text-white hover:text-white"} ease-linear duration-200 md:bg-[#404B7C] shadow-md shadow-gray-500 w-full md:w-auto whitespace-nowrap group px-4 md:px-12 py-3 md:py-6 text-white cursor-pointer text-[11px] sm:text-[16px] md:text-[20px] rounded-full md:rounded-[10px] lg:text-[24px] font-[600] justify-center flex gap-3 items-center`} key={index} onClick={()=>changeStatistic(item?.id)}>
                        <span className='relative flex justify-center'>
                            {item?.title}
                            {item?.id === activeStatistic && <span className='hidden md:inline-block w-full h-[2px] bg-white absolute bottom-0 left-0'></span> }
                            <span className='hidden md:block h-[2px] bottom-0 bg-white ease-linear duration-200 w-0 group-hover:w-[100%] absolute'></span>
                        </span>
                        <Image src={item?.icon} alt={item?.title} className={`hidden md:block w-[28px] lg:w-[40px] h-[28px] lg:h-[40px] object-contain`} width={100} height={100}/>
                    </button>)
                })
            }
        </div>
        {
            components?.filter(item=> item?.id === activeStatistic)?.map((item,index)=> (
                <div key={index} className='w-full flex justify-center'>{item?.component}</div>
            ))
        }
    </section>
  )
}

export default Statistics


const OnlineReception = () => {
    const t = useTranslations()
    const OnlineReceptionData = [
        {
            title: t("information.reception1"),
            img: ITImage,
            href: "/"
        },
        {
            title: t("information.reception2"),
            img: ITImage,
            href: "/"
        },
        {
            title: t("information.reception3"),
            img: ITImage,
            href: "/"
        },
    ]
    return <div data-aos="fade-up" className='max-w-[1240px] w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-[20px]'>
        {
            OnlineReceptionData?.map((item,index)=> {
                return <div key={index} className='w-full relative flex justify-center items-center rounded-[10px] overflow-hidden h-[160px]'>
                    <Image src={item?.img} alt={item?.title} width={400} height={300} className='absolute w-full h-full left-0 top-0 z-[-1] object-cover'/>
                    <Link href={item?.href} className='text-white font-[500] text-[24px] sm:text-[30px] text-center'>{item?.title}</Link>
                </div>
            })
        }
  </div>
}

const DirectionsTable = () => {
    const t = useTranslations()
    const pathname = usePathname()
    const DirectionTHeads = [
        t("information.th1"),
        t("information.th2"),
        t("information.th3"),
        t("information.th4"),
        t("information.th9"),
    ]
    
    const DirectionTBodies = [
        {
            tb1: t("information.faculty1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb4: t("information.tb4"),
            href: `${pathname}/yonalishlar`
        },
        {
            tb1: t("information.faculty2"),
            tb2: t("information.tb2a"),
            tb3: t("information.tb3a"),
            tb4: t("information.tb4"),
            href: `${pathname}/yonalishlar`
        }
        
    ]
    return (
        <div className='overflow-x-auto w-full md:flex justify-center'>
            <table className='w-full max-w-[1300px]'>
                <thead>
                    <tr className='w-full whitespace-nowrap text-[16px] lg:text-[26px] py-5 border-b-[2px] border-b-[#404B7C]'>
                        {
                            DirectionTHeads?.map((item,index)=> (
                            <td key={index} className="py-3 px-2 lg:px-0 lg:py-5 min-w-[100px]">{item}</td>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        DirectionTBodies?.map((item,index)=> (
                        <tr className='text-[16px] whitespace-nowrap lg:text-[26px] py-2 lg:py-5 text_main border-b-[2px] border-b-[#404B7C]' key={index}>
                            <td className='py-3 px-2 lg:px-0 lg:py-5'>{item?.tb1}</td>
                            <td className='py-3 px-2 lg:px-0 lg:py-5'>{item?.tb2}</td>
                            <td className='py-3 px-2 lg:px-0 lg:py-5'>{item?.tb3}</td>
                            <td className='py-3 px-2 lg:px-0 lg:py-5'>{item?.tb4}</td>
                            <td className='px-2 lg:px-0'>
                                <Link href={item?.href} className='bg-[#404B7C] text-white px-3 text-[14px] lg:text-[20px] py-2 rounded-md border-2 border-[#404B7C] hover:text-[#404B7C] hover:bg-white ease-linear duration-200'>{t("information.btn")}</Link>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

// const EducatorsTable = () => {
//     const t = useTranslations()
//     const EducatorTHeads = [
//         "",
//         t("information.th6"),
//         t("information.th5"),
//         t("information.th7"),
//         t("information.th8"),
//         t("information.th9"),
//     ]
//     const EducatorTBodies = [
//         {
//             id: 1,
//             tb1: t("information.tb5"),
//             tb2: t("information.tb6"),
//             tb3: "+998 90 123 4567",
//             tb4: [
//                 {
//                     icon: <FaFacebookF />,
//                     link: "https://facebook.com"
//                 },
//                 {
//                     icon:  <FaTelegramPlane />,
//                     link: "https://t.me"
//                 },
//                 {
//                     icon: <RiInstagramFill />,
//                     link: "https://instagram.com"
//                 },
//                 {
//                     icon: <FaYoutube />,
//                     link: "https://youtube.com"
//                 },
//             ],
//             tb5: "Link",
//         },
//         {
//             id: 2,
//             tb1: t("information.tb5"),
//             tb2: t("information.tb6"),
//             tb3: "+998 90 123 4567",
//             tb4: [
//                 {
//                     icon: <FaFacebookF />,
//                     link: "https://facebook.com"
//                 },
//                 {
//                     icon:  <FaTelegramPlane />,
//                     link: "https://t.me"
//                 },
//                 {
//                     icon: <RiInstagramFill />,
//                     link: "https://instagram.com"
//                 },
//                 {
//                     icon: <FaYoutube />,
//                     link: "https://youtube.com"
//                 },
//             ],
//             tb5: "Link",
//         },
//         {
//             id: 3,
//             tb1: t("information.tb5"),
//             tb2: t("information.tb6"),
//             tb3: "+998 90 123 4567",
//             tb4: [
//                 {
//                     icon: <FaFacebookF />,
//                     link: "https://facebook.com"
//                 },
//                 {
//                     icon:  <FaTelegramPlane />,
//                     link: "https://t.me"
//                 },
//                 {
//                     icon: <RiInstagramFill />,
//                     link: "https://instagram.com"
//                 },
//                 {
//                     icon: <FaYoutube />,
//                     link: "https://youtube.com"
//                 },
//             ],
//             tb5: "Link",
//         },
//         {
//             id: 4,
//             tb1: t("information.tb5"),
//             tb2: t("information.tb6"),
//             tb3: "+998 90 123 4567",
//             tb4: [
//                 {
//                     icon: <FaFacebookF />,
//                     link: "https://facebook.com"
//                 },
//                 {
//                     icon:  <FaTelegramPlane />,
//                     link: "https://t.me"
//                 },
//                 {
//                     icon: <RiInstagramFill />,
//                     link: "https://instagram.com"
//                 },
//                 {
//                     icon: <FaYoutube />,
//                     link: "https://youtube.com"
//                 },
//             ],
//             tb5: "Link",
//         },
//         {
//             id: 5,
//             tb1: t("information.tb5"),
//             tb2: t("information.tb6"),
//             tb3: "+998 90 123 4567",
//             tb4: [
//                 {
//                     icon: <FaFacebookF />,
//                     link: "https://facebook.com"
//                 },
//                 {
//                     icon:  <FaTelegramPlane />,
//                     link: "https://t.me"
//                 },
//                 {
//                     icon: <RiInstagramFill />,
//                     link: "https://instagram.com"
//                 },
//                 {
//                     icon: <FaYoutube />,
//                     link: "https://youtube.com"
//                 },
//             ],
//             tb5: "Link",
//         },
//         {
//             id: 6,
//             tb1: t("information.tb5"),
//             tb2: t("information.tb6"),
//             tb3: "+998 90 123 4567",
//             tb4: [
//                 {
//                     icon: <FaFacebookF />,
//                     link: "https://facebook.com"
//                 },
//                 {
//                     icon:  <FaTelegramPlane />,
//                     link: "https://t.me"
//                 },
//                 {
//                     icon: <RiInstagramFill />,
//                     link: "https://instagram.com"
//                 },
//                 {
//                     icon: <FaYoutube />,
//                     link: "https://youtube.com"
//                 },
//             ],
//             tb5: "Link",
//         },
//         {
//             id: 7,
//             tb1: t("information.tb5"),
//             tb2: t("information.tb6"),
//             tb3: "+998 90 123 4567",
//             tb4: [
//                 {
//                     icon: <FaFacebookF />,
//                     link: "https://facebook.com"
//                 },
//                 {
//                     icon:  <FaTelegramPlane />,
//                     link: "https://t.me"
//                 },
//                 {
//                     icon: <RiInstagramFill />,
//                     link: "https://instagram.com"
//                 },
//                 {
//                     icon: <FaYoutube />,
//                     link: "https://youtube.com"
//                 },
//             ],
//         },
//         {
//             id: 8,
//             tb1: t("information.tb5"),
//             tb2: t("information.tb6"),
//             tb3: "+998 90 123 4567",
//             tb4: [
//                 {
//                     icon: <FaFacebookF />,
//                     link: "https://facebook.com"
//                 },
//                 {
//                     icon:  <FaTelegramPlane />,
//                     link: "https://t.me"
//                 },
//                 {
//                     icon: <RiInstagramFill />,
//                     link: "https://instagram.com"
//                 },
//                 {
//                     icon: <FaYoutube />,
//                     link: "https://youtube.com"
//                 },
//             ],
//             tb5: "Link",
//         },
//     ]
//     const [activeItem, setActiveItem] = useState<number>(0)
//     return (
//         <div className='overflow-x-auto w-full md:flex justify-center'>
//             <table className='w-full max-w-[1300px] bg-white'>
//                 <tbody>
//                         <tr className='w-full whitespace-nowrap text-[16px] lg:text-[26px] py-5 border-b-[2px] border-b-[#404B7C]'>
//                         {
//                             EducatorTHeads?.map((item,index)=> (
//                             <td key={index} className="py-3 px-2 lg:px-0 lg:py-5 min-w-[100px]">{item}</td>
//                             ))
//                         }
//                         </tr>
//                     {
//                         EducatorTBodies?.map((item,index)=> (
//                         <>
//                             <tr className='text-[16px] whitespace-nowrap relative lg:text-[26px] py-2 lg:py-5 text_main border-b-[2px] border-b-[#404B7C]' key={index}>
//                                 <td className='py-3 px-3  lg:py-5'>
//                                     <Image src={EducatorImg} alt='Educator' width={100} height={100} className='w-[50px] object-cover h-[50px] rounded-full'/>
//                                 </td>
//                                 <td className='py-3 px-2 lg:px-0 lg:py-5 '>{item?.tb2}</td>
//                                 <td className='py-3 px-2 lg:px-0 lg:py-5'>{item?.tb1}</td>
//                                 <td className='py-3 px-2 lg:px-0 lg:py-5'>{item?.tb3}</td>
//                                 <td className='py-3 px-2 lg:px-0 lg:py-5'>
//                                     <div className='flex items-center gap-3 text-[20px] lg:text-[30px]'>
//                                         {item?.tb4?.map((el,index)=> <a href={el?.link} target='blank' key={index}>{el?.icon}</a>)}
//                                     </div>
//                                 </td>
//                                 <td className='py-3 px-2 lg:px-0 lg:py-5'>
//                                     <button onClick={()=>setActiveItem(item?.id === activeItem ? 0 : item?.id)} className='bg-[#404B7C] text-white px-3 text-[14px] lg:text-[20px] py-2 rounded-md border-2 border-[#404B7C] hover:text-[#404B7C] hover:bg-white ease-linear duration-200'>{t("information.btn2")}</button>
//                                 </td>
//                             </tr>
//                             <tr className={`${activeItem === item?.id ? "" : "hidden"} relative`}>
//                                 <td colSpan={6} className='w-full'>
//                                     <div className={`flex justify-center w-full`}>
//                                         <h2>{item?.tb2}</h2>
//                                     </div>
//                                 </td>
//                             </tr>
//                         </>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

const Faculties = () => {
    const aboutData = [
        {
            id: 1,
            title: "Axborot texnologiyalari fakulteti",
            desc: "Toshkent iqtisodiyot va pedagogika instituti (TIPI) tarkibida joylashgan 'Axborot texnologiyalari' fakulteti, odatda, axborot-kommunikatsiya texnologiyalari, dasturiy ta'minot ishlab chiqish, tarmoq texnologiyalari, hamda IT sohasidagi boshqa yo'nalishlar bo'yicha mutaxassislarni tayyorlash bilan shug'ullanadi. Ushbu fakultetda odatda quyidagi yo'nalishlarda ta'lim beriladi:  - Dasturiy injiniring: Dasturiy mahsulotlarni ishlab chiqish va boshqarish. - Kompyuter tizimlari va tarmoqlar: Tarmoq xavfsizligi, apparat va dasturiy yechimlarni boshqarish. - Axborot xavfsizligi: Ma'lumotlarni himoya qilish texnologiyalari. - Sun’iy intellekt va ma’lumotlar tahlili: AI va Big Data bilan ishlash bo'yicha kurslar. Fakultetda talabalarga nazariy bilimlardan tashqari, amaliy ko'nikmalarni shakllantirishga katta e'tibor qaratiladi. Shu bilan birga, talabalar innovatsion loyihalarda qatnashish, startaplar yaratish va xalqaro IT tanlovlarida ishtirok etish imkoniyatlariga ega bo'lishadi."
        },
        {
            id: 2,
            title: "Pedagogika fakulteti",
            desc: "Pedagogika va psixologiya fakulteti Toshkent iqtisodiyot va pedagogika institutining muhim bo‘limlaridan biri bo‘lib, zamonaviy ta’lim va psixologiya sohasida malakali kadrlar tayyorlashni maqsad qilgan. Ushbu fakultet ta’lim jarayonida nazariy bilimlarni amaliy ko‘nikmalar bilan uyg‘unlashtirishga katta e’tibor qaratadi.  Fakultetning asosiy yo‘nalishlari: 1. Pedagogika:    - Zamonaviy pedagogik texnologiyalarni o‘qitish va tarbiyaviy jarayonlarni boshqarish.    - Ta’lim tizimida ijodiy va innovatsion yondashuvlarni shakllantirish.    - Ta’lim berish jarayonida axborot-kommunikatsiya texnologiyalaridan foydalanish. 2. Psixologiya:    - Yosh bolalar, o‘smirlar va kattalarning psixologik rivojlanishini o‘rganish.    - O‘quvchi va talabalarning psixologik muammolarini hal etish usullari.    - Oilaviy psixologiya va ta’lim jarayonida psixologik yondashuvlarni qo‘llash. O‘qitiladigan asosiy fanlar: - Umumiy pedagogika va psixologiya - Bolalar va o‘smirlar psixologiyasi - Ta’lim psixologiyasi - Metodik yondashuvlar va pedagogik texnologiyalar - Inson rivojlanishi va ijtimoiy psixologiya - O‘z-o‘zini rivojlantirish va liderlik ko‘nikmalari  Fakultetning maqsadlari: - Ta’lim tizimi uchun yuqori malakali pedagoglar va psixologlarni tayyorlash. - Psixologik maslahat va ta’lim-tarbiyaviy faoliyatni tashkil qilish bo‘yicha kadrlar tayyorlash. - Innovatsion pedagogik va psixologik metodlarni rivojlantirish.  Amaliy faoliyat: - Maktablar, bolalar bog‘chalari va ta’lim muassasalarida amaliyot o‘tash. - Psixologik diagnostika va maslahat berish bo‘yicha amaliy mashg‘ulotlar. - Pedagogik tadbirlar va treninglar tashkil etish. Ilmiy-ijodiy faoliyat: - Pedagogika va psixologiyaga oid ilmiy tadqiqotlar olib borish. - Ilmiy maqolalar va o‘quv-uslubiy qo‘llanmalar tayyorlash. - Xalqaro konferensiyalar va seminarlar tashkil etish.  Hamkorlik va imkoniyatlar: - Mahalliy va xalqaro ta’lim tashkilotlari bilan hamkorlik qilish. - Xorijiy universitetlar bilan tajriba almashish va almashinuv dasturlarida ishtirok etish. - Talabalar uchun psixologik markazlarda amaliyot o‘tash imkoniyati. Ushbu fakultet o‘quvchilarga ta’lim jarayonini sifatli tashkil etish, inson psixologiyasi bilan ishlash bo‘yicha zamonaviy bilim va ko‘nikmalarni beradi."
        },
        {
            id: 3,
            title: "Iqtisodiyot fakulteti",
            desc: "Iqtisodiyot fakulteti Toshkent iqtisodiyot va pedagogika instituti tarkibidagi yetakchi bo‘limlardan biri bo‘lib, iqtisodiyot, moliya, menejment va biznesni rivojlantirish sohalarida yuqori malakali kadrlar tayyorlashga ixtisoslashgan. Fakultet zamonaviy iqtisodiy bilimlarni nazariy va amaliy asosda o‘rgatishga, talabalarning ilmiy-tadqiqot va amaliyot ko‘nikmalarini rivojlantirishga yo‘naltirilgan. Fakultetning asosiy yo‘nalishlari: Iqtisodiyot nazariyasi: Iqtisodiy qonuniyatlarni tushunish va tahlil qilish. Milliy va xalqaro iqtisodiy tizimlarning ishlash mexanizmlarini o‘rganish. Moliyaviy boshqaruv va tahlil: Moliyaviy hisobotlarni tuzish va tahlil qilish. Korporativ moliyaviy menejment va byudjetlashni o‘rgatish. Biznes va tadbirkorlik: Startaplarni rivojlantirish va innovatsion biznes loyihalar yaratish. Marketing strategiyalari va raqobatbardosh biznes modellarini ishlab chiqish. Statistika va iqtisodiy prognozlash: Iqtisodiy ma’lumotlarni yig‘ish, tahlil qilish va prognoz qilish. Mahalliy va xalqaro iqtisodiyotda raqamli texnologiyalarni qo‘llash. O‘qitiladigan asosiy fanlar: Mikroiqtisodiyot va makroiqtisodiyot Moliyaviy boshqaruv va investitsiyalar Iqtisodiy statistika va prognozlash Biznes boshqaruvi va marketing Xalqaro iqtisodiyot va iqtisodiy integratsiya Korporativ boshqaruv asoslari Fakultetning maqsadlari: Iqtisodiyot sohasida nazariy bilim va amaliy ko‘nikmalarga ega mutaxassislarni tayyorlash. Talabalarga strategik fikrlash, iqtisodiy tahlil va menejment bo‘yicha yetakchilik ko‘nikmalarini rivojlantirish. Mintaqaviy va xalqaro iqtisodiy jarayonlarda ishtirok etadigan kadrlar tayyorlash. Ilmiy-tadqiqot faoliyati: Iqtisodiyotning dolzarb masalalari bo‘yicha ilmiy tadqiqotlar o‘tkazish. Iqtisodiy rivojlanish va innovatsion texnologiyalarni o‘rganishga qaratilgan loyiha ishlari. Talabalarni iqtisodiyot va biznes bo‘yicha ilmiy maqolalar tayyorlashga jalb qilish. Amaliy faoliyat: Banklar, sug‘urta kompaniyalari, moliyaviy va davlat tashkilotlarida amaliyot o‘tash. Biznes tashkilotlari bilan hamkorlikda loyihalarda ishtirok etish. Innovatsion biznes modellarini ishlab chiqish bo‘yicha treninglar va master-klasslar tashkil qilish. Hamkorlik va imkoniyatlar: Milliy va xalqaro iqtisodiy tashkilotlar bilan hamkorlikda qo‘shma loyihalar. Xorijiy universitetlar bilan almashinuv dasturlari. Talabalarga moliyaviy boshqaruv va xalqaro biznes bo‘yicha xalqaro sertifikatlar olish imkoniyati."
        },
        {
            id: 4,
            title: "Tillar va maktabgacha ta'lim fakulteti",
            desc: "Tillar va maktabgacha ta’lim fakulteti Toshkent iqtisodiyot va pedagogika institutining muhim tarkibiy qismlaridan biri bo‘lib, tilshunoslik va maktabgacha ta’lim sohalarida zamonaviy kadrlar tayyorlashga ixtisoslashgan. Ushbu fakultetning asosiy maqsadi ta’lim va pedagogika sohasida yuqori malakali, ijodiy fikrlaydigan va zamonaviy bilimlarga ega mutaxassislarni tarbiyalashdir. Fakultet yo‘nalishlari: 1. Tillar bo‘limi:    - O‘zbek va chet tillari (ingliz, rus, arab, va boshqa tillar) bo‘yicha filologik va pedagogik yo‘nalishda bilim berish.    - Talabalarni til o‘rgatishning zamonaviy uslublariga o‘rgatish, shu jumladan innovatsion texnologiyalar va interaktiv dars metodikasidan foydalanish. 2. Maktabgacha ta’lim bo‘limi:    - Maktabgacha yoshdagi bolalarni rivojlantirish va tarbiyalashga oid nazariy va amaliy bilimlarni berish.    - Ta’limning zamonaviy konsepsiyalarini, shu jumladan o‘yin orqali o‘rgatish va STEAM yondashuvlarini joriy etish.  Fakultetda o‘qitiladigan asosiy fanlar: - Chet tillarini o‘qitish metodikasi - Tilshunoslik nazariyasi va amaliyoti - Maktabgacha ta’lim pedagogikasi - Bolalar psixologiyasi va rivojlanish nazariyasi - Ta’limda axborot-kommunikatsiya texnologiyalari  Amaliy faoliyat: - Talabalar uchun maktabgacha ta’lim muassasalarida amaliyot o‘tash imkoniyatlari. - Til o‘rgatish va o‘quv jarayonida texnologiyalardan foydalanish bo‘yicha treninglar. - Ilmiy-ijodiy konferensiyalar va seminarlar tashkil etish.  Hamkorlik va imkoniyatlar: - Mahalliy va xalqaro maktabgacha ta’lim tashkilotlari bilan hamkorlik qilish. - Talabalarga xorijiy tillarni chuqur o‘rganish va til sertifikatlariga tayyorgarlik ko‘rish imkoniyatlarini taqdim etish. Fakultet o‘quvchilarga nazariy bilimlardan tashqari, amaliy ko‘nikmalarni ham shakllantirib, kelajakda ularni maktabgacha ta’lim va tilshunoslik sohasida yetakchi mutaxassis bo‘lishga tayyorlaydi."
        },
        {
            id: 5,
            title: "Ijtimoiy fanlar fakulteti",
            desc: "Ijtimoiy fanlar fakulteti Toshkent iqtisodiyot va pedagogika instituti tarkibida ijtimoiy fanlar, falsafa, tarix, huquqshunoslik, sotsiologiya va boshqa ijtimoiy yo‘nalishlarda yetuk kadrlar tayyorlashga ixtisoslashgan bo‘lim hisoblanadi. Fakultet ijtimoiy fanlarning nazariy asoslarini amaliy yondashuv bilan uyg‘unlashtirgan holda, zamonaviy jamiyatning rivojlanishiga xizmat qiluvchi mutaxassislarni tayyorlashga qaratilgan. Fakultetning asosiy yo‘nalishlari: Falsafa va ijtimoiy tafakkur: Falsafa va ijtimoiy ong rivojlanishi tarixini o‘rganish. Jamiyatdagi muhim ijtimoiy va ma’naviy masalalarni tahlil qilish. Tarix va madaniyat: Milliy va jahon tarixini tadqiq qilish va tahlil qilish. Madaniy merosni o‘rganish va uni yosh avlodga etkazish. Huquq va siyosatshunoslik: Fuqarolik jamiyati rivojlanishi va huquqiy bilimlarni shakllantirish. Siyosiy jarayonlarni va xalqaro munosabatlarni tushunish ko‘nikmalarini berish. Sotsiologiya va psixologiya: Jamiyatdagi ijtimoiy jarayonlar va insonlarning xulq-atvorini o‘rganish. Ommaviy va shaxsiy psixologik jarayonlarni tahlil qilish. O‘qitiladigan asosiy fanlar: Falsafa va mantiq asoslari Jahon va O‘zbekiston tarixi Sotsiologiya va siyosiy nazariya Huquqshunoslik va fuqarolik jamiyati Madaniyatshunoslik va etika Inson huquqlari va xalqaro huquq Fakultetning maqsadlari: Talabalarga ijtimoiy fanlar bo‘yicha keng qamrovli bilim berish va ularni amaliyotga tatbiq etish ko‘nikmalarini rivojlantirish. Jamiyat rivojlanishi va ijtimoiy jarayonlarga ongli yondashadigan yetuk mutaxassislar tayyorlash. Talabalarda milliy qadriyatlar va global masalalarga nisbatan mas’uliyat hissini shakllantirish. Ilmiy-tadqiqot faoliyati: Ijtimoiy fanlarning dolzarb masalalari bo‘yicha ilmiy tadqiqotlar olib borish. Milliy va xalqaro miqyosda tarixiy va ijtimoiy masalalarni tahlil qilish. Talabalarni ilmiy faoliyatga jalb etish va ularning ijodiy ishlanmalarini rivojlantirish. Amaliy faoliyat: Maktablar va oliy ta’lim muassasalarida ijtimoiy fanlarni o‘qitish bo‘yicha amaliyot o‘tkazish. Huquqiy maslahat va ijtimoiy tadqiqotlar markazlarida ishtirok etish. Ijtimoiy loyihalar va madaniy tadbirlar tashkil qilish. Hamkorlik va imkoniyatlar: Mahalliy va xalqaro ilmiy markazlar bilan hamkorlikda tadqiqotlar olib borish. Xorijiy oliy o‘quv yurtlari bilan almashinuv dasturlarida qatnashish. Talabalar uchun xalqaro forum va konferensiyalarda ishtirok etish imkoniyati."
        },
    ]
    return (
        <div>
        <DirectionsTable/>
        <AboutFaculty data={aboutData}/>
        </div>
    )
}

const Kafedra = () => {
    const aboutData = [
        {
            id: 1,
            title: "Axborot texnologiyalari kafedrasi",
            desc: "Toshkent iqtisodiyot va pedagogika instituti (TIPI) tarkibidagi 'Axborot texnologiyalari' kafedrasi zamonaviy axborot-kommunikatsiya texnologiyalari sohasida yetakchi mutaxassislar tayyorlashni maqsad qilgan ilmiy va o‘quv bo‘lim hisoblanadi. Ushbu kafedra odatda quyidagi faoliyat yo‘nalishlarida ishlaydi: Kafedraning asosiy vazifalari: 1. Ta’lim dasturlari tayyorlash:     - Axborot texnologiyalari, dasturiy ta’minot, ma’lumotlar bazasi, tarmoq texnologiyalari va axborot xavfsizligi bo‘yicha nazariy va amaliy bilimlar berish.    - O‘quv rejalarini xalqaro standartlarga moslashtirish.     2. Ilmiy izlanishlar:    - Axborot texnologiyalari va sun'iy intellektni rivojlantirish sohasida ilmiy tadqiqotlar olib borish.    - Mahalliy va xalqaro grantlarda ishtirok etish. 3. Amaliy ko‘nikmalar shakllantirish:    - Talabalarni real loyihalarda ishlashga o‘rgatish.    - Zamonaviy dasturlash tillari, ma’lumotlar tahlili va tarmoqlar bilan ishlash bo‘yicha laboratoriya darslari. 4. Hamkorlik va integratsiya:    - Dasturiy va texnologik kompaniyalar bilan hamkorlikda loyihalar ishlab chiqish.    - Xalqaro universitetlar va IT tashkilotlari bilan tajriba almashish.  O‘qitiladigan asosiy fanlar: - Dasturiy ta'minot muhandisligi asoslari - Kompyuter tarmoqlari va axborot xavfsizligi - Sun’iy intellekt va mashinani o‘qitish - Ma’lumotlar bazasini boshqarish tizimlari - Veb va mobil ilovalar yaratish"
        },
        {
            id: 2,
            title: "Pedagogika kafedrasi",
            desc: "Pedagogika va psixologiya kafedrasi Toshkent iqtisodiyot va pedagogika instituti tarkibida faoliyat yurituvchi muhim bo‘limlardan biri bo‘lib, pedagogik jarayonlar va inson psixologiyasi bo‘yicha ilmiy-tadqiqot va o‘quv faoliyatini amalga oshiradi. Kafedra zamonaviy ta’lim usullari va psixologik yondashuvlarni o‘rgatish orqali o‘z sohasida yetakchi mutaxassislarni tayyorlashga qaratilgan. Kafedraning asosiy yo‘nalishlari: Pedagogika bo‘yicha ta’lim: Ta’lim-tarbiya jarayonida pedagogik innovatsiyalarni qo‘llash. Tarbiyaviy ishlarni tashkil qilishda zamonaviy metodikalarni joriy etish. O‘quvchilar va talabalar bilan ishlashda ijodiy yondashuvlarni rivojlantirish. Psixologiya bo‘yicha ta’lim: Bolalar va o‘smirlarning psixologik rivojlanishini tahlil qilish. Stressni boshqarish, emotsional intellekt va kommunikativ ko‘nikmalarni rivojlantirish. Psixologik maslahat va terapevtik yondashuvlarni amaliyotda qo‘llash. O‘qitiladigan asosiy fanlar: Umumiy pedagogika va psixologiya Yosh psixologiyasi va pedagogik psixologiya Inson rivojlanishining psixologik asoslari Ta’lim jarayonini boshqarish va pedagogik texnologiyalar Oilaviy psixologiya va nizolarni boshqarish Psixologik maslahat va diagnostika Kafedraning maqsadlari: Talabalarga ta’lim va psixologiya bo‘yicha nazariy bilim va amaliy ko‘nikmalarni shakllantirish. Pedagogik faoliyatda liderlik va ijodiy yondashuvni rivojlantirish. Psixologik tadqiqotlar va maslahat xizmatlari orqali jamiyatga hissa qo‘shish. Ilmiy-tadqiqot faoliyati: Pedagogika va psixologiyaning dolzarb masalalari bo‘yicha tadqiqotlar olib borish. Ilmiy maqolalar, monografiyalar va qo‘llanmalar yaratish. Xalqaro ilmiy konferensiyalar va seminarlar tashkil qilish. Amaliy faoliyat: Ta’lim muassasalari bilan hamkorlikda pedagogik tajriba almashish. Psixologik markazlar va maslahat xizmatlarida amaliy mashg‘ulotlar. O‘quvchilar va ota-onalar uchun treninglar va seminarlar tashkil qilish. Hamkorlik va imkoniyatlar: Ta’lim va psixologiya yo‘nalishidagi xalqaro dasturlar bilan ishlash. Xorijiy universitetlar bilan hamkorlikda qo‘shma loyihalar. Talabalar uchun mahalliy va xalqaro amaliyot dasturlarini tashkil etish."
        },
        {
            id: 3,
            title: "Iqtisodiyot kafedrasi",
            desc: "Iqtisodiyot kafedrasi Toshkent iqtisodiyot va pedagogika instituti tarkibida iqtisodiyot sohasida nazariy va amaliy bilimlar beruvchi muhim bo‘lim hisoblanadi. Ushbu kafedra iqtisodiy tahlil, boshqaruv, xalqaro iqtisodiyot va moliya yo‘nalishlarida yuqori malakali mutaxassislarni tayyorlashga qaratilgan. Kafedraning asosiy yo‘nalishlari: Nazariy iqtisodiyot: Mikroiqtisodiyot va makroiqtisodiyotning asosiy qonuniyatlarini o‘rganish. Iqtisodiy rivojlanishning zamonaviy tendensiyalarini tushuntirish. Xalqaro iqtisodiy aloqalar: Global iqtisodiy integratsiya jarayonlari va savdo siyosatini o‘rganish. Xalqaro moliya va investitsiyalar sohasidagi tendensiyalarni tahlil qilish. Iqtisodiy tahlil va boshqaruv: Mahalliy va korporativ iqtisodiy jarayonlarni boshqarish. Moliyaviy tahlil va rejalashtirish bo‘yicha amaliy bilimlarni shakllantirish. Innovatsion iqtisodiyot: Raqamli iqtisodiyot va texnologik innovatsiyalarning iqtisodiy rivojlanishga ta’sirini o‘rganish. Barqaror rivojlanish va ekologik iqtisodiyot masalalarini tahlil qilish. O‘qitiladigan asosiy fanlar: Mikroiqtisodiyot va makroiqtisodiyot nazariyasi Xalqaro iqtisodiy munosabatlar Korporativ boshqaruv va strategik rejalashtirish Moliyaviy va iqtisodiy tahlil Raqamli iqtisodiyot asoslari Iqtisodiy statistikalar va prognozlash usullari Kafedraning maqsadlari: Talabalarga iqtisodiy jarayonlarni tushunish va tahlil qilish ko‘nikmalarini berish. Zamonaviy iqtisodiy bilimlarga ega, innovatsion fikrlaydigan mutaxassislarni tayyorlash. Iqtisodiy tahlil va boshqaruvda raqamli texnologiyalarni qo‘llashni o‘rgatish. Ilmiy-tadqiqot faoliyati: Mahalliy va xalqaro iqtisodiy muammolarni o‘rganishga qaratilgan ilmiy tadqiqotlar. Innovatsion texnologiyalar va raqamli iqtisodiyot masalalari bo‘yicha ilmiy loyihalar. Talabalarni iqtisodiy tadqiqotlarga jalb qilish va ular uchun ilmiy maqolalar yozishni tashkil etish. Amaliy faoliyat: Davlat idoralari, banklar, va xususiy sektor tashkilotlari bilan hamkorlikda amaliyot o‘tkazish. Iqtisodiy masalalar bo‘yicha seminarlar va treninglar tashkil qilish. Biznes va moliyaviy muassasalar uchun maslahat xizmatlarini yo‘lga qo‘yish. Hamkorlik va imkoniyatlar: Milliy iqtisodiy tashkilotlar va davlat idoralari bilan hamkorlik. Xalqaro moliya va iqtisodiyot universitetlari bilan almashinuv dasturlari. Talabalar uchun xalqaro iqtisodiy forumlarda ishtirok etish imkoniyati."
        },
        {
            id: 4,
            title: "Tillar va maktabgacha ta'lim kafedrasi",
            desc: "Tillar va maktabgacha ta’lim kafedrasi Toshkent iqtisodiyot va pedagogika instituti tarkibidagi muhim bo‘limlardan biri bo‘lib, o‘z faoliyatini ikkita asosiy yo‘nalishda olib boradi: tilshunoslik va maktabgacha ta’lim pedagogikasi. Ushbu kafedra ta’lim jarayonida nazariy bilimlarni amaliy ko‘nikmalar bilan uyg‘unlashtirgan holda yuqori malakali kadrlar tayyorlashga xizmat qiladi. ### Kafedraning asosiy yo‘nalishlari: 1. Tillar bo‘yicha ta’lim:    - O‘zbek tili va adabiyoti, rus tili, ingliz tili va boshqa chet tillarini o‘qitish.    - Chet tillarini o‘rgatish metodikasini ishlab chiqish va joriy etish.    - Lingvistik tadqiqotlar o‘tkazish va zamonaviy tilshunoslik yo‘nalishlarini rivojlantirish. 2. Maktabgacha ta’lim pedagogikasi:    - Maktabgacha ta’lim tizimi uchun o‘qituvchi va tarbiyachilarni tayyorlash.    - Yosh bolalar rivojlanishi, ularning psixologiyasi va tarbiyaviy metodlar bo‘yicha chuqur bilim berish.    - O‘yin metodikalari, STEAM yondashuvlari va innovatsion usullarni amaliyotga joriy etish.  O‘qitiladigan fanlar: - Chet tillarini o‘qitish metodikasi (ingliz, rus, arab va boshqa tillar) - Bolalar rivojlanishi va maktabgacha ta’lim nazariyasi - Lingvistika asoslari va tilshunoslik - Bolalar adabiyoti va uni o‘qitish metodikasi - O‘yin orqali ta’lim berish usullari  Kafedraning maqsadlari: - Talabalarga zamonaviy pedagogik usullarni o‘rgatish. - Lingvistika va maktabgacha ta’lim sohasida innovatsion yondashuvlarni ishlab chiqish. - Talabalarni ilmiy-tadqiqot faoliyatiga jalb qilish va ularning ijodiy qobiliyatlarini rivojlantirish. - Maktabgacha ta’lim muassasalarida amaliyot tashkil etish orqali o‘qituvchilarni real tajriba bilan boyitish.  Kafedraning ilmiy-ijodiy faoliyati: - Tilshunoslik va maktabgacha ta’lim metodikalariga oid ilmiy maqolalar tayyorlash. - Konferensiyalar, seminarlar va ustaxonalar tashkil etish. - Maktabgacha ta’limda innovatsion texnologiyalarni joriy etish bo‘yicha loyiha ishlari.  Hamkorlik va imkoniyatlar: - Maktabgacha ta’lim tashkilotlari va xalqaro til markazlari bilan hamkorlik. - Xorijiy grantlar va almashinuv dasturlarida ishtirok etish imkoniyati. - O‘quvchilar uchun professional rivojlanish bo‘yicha maxsus trening va kurslar."
        },
        {
            id: 5,
            title: "Ijtimoiy fanlar kafedrasi",
            desc: "Ijtimoiy fanlar kafedrasi Toshkent iqtisodiyot va pedagogika instituti tarkibidagi muhim bo‘limlardan biri bo‘lib, talabalar va tadqiqotchilarni ijtimoiy fanlar sohasida chuqur bilimlar bilan ta’minlaydi. Ushbu kafedra ijtimoiy-gumanitar fanlarni o‘qitish, tadqiq qilish va rivojlantirish orqali jamiyat taraqqiyotiga hissa qo‘shadigan mutaxassislarni tayyorlashga qaratilgan. Kafedraning asosiy yo‘nalishlari: Falsafa va ma’naviyat: Falsafiy tafakkur asoslarini tushuntirish va rivojlantirish. Milliy qadriyatlar va ma’naviyatni o‘rganish. Tarix va tarixshunoslik: Jahon va O‘zbekiston tarixining muhim bosqichlarini o‘rgatish. Tarixiy voqealarning zamonaviy jarayonlarga ta’sirini tahlil qilish. Huquq va fuqarolik bilimlari: Talabalarda huquqiy ong va fuqarolik mas’uliyatini shakllantirish. Huquqshunoslik asoslarini amaliyotda qo‘llash ko‘nikmalarini rivojlantirish. Sotsiologiya va ijtimoiy jarayonlar: Jamiyatdagi ijtimoiy jarayonlar va ularning rivojlanishini o‘rganish. Sotsiologik tadqiqotlar asosida jamiyatdagi muammolarni tahlil qilish. O‘qitiladigan asosiy fanlar: Falsafa va mantiq asoslari Madaniyatshunoslik va etika Jahon va O‘zbekiston tarixi Fuqarolik huquqi va konstitutsiya asoslari Sotsiologiya va ijtimoiy tadqiqot usullari Inson huquqlari va xalqaro huquq Kafedraning maqsadlari: Talabalarga ijtimoiy fanlarning nazariy asoslarini o‘rgatish va amaliy ko‘nikmalarni rivojlantirish. Talabalarda mustaqil fikrlash, ijtimoiy mas’uliyat va jamiyatga xizmat qilish fazilatlarini shakllantirish. Mahalliy va global ijtimoiy muammolarga innovatsion yondashuvni rivojlantirish. Ilmiy-tadqiqot faoliyati: Falsafa, tarix va sotsiologiya sohalarida dolzarb mavzular bo‘yicha tadqiqotlar. Talabalarni ilmiy maqolalar, dissertatsiyalar va boshqa ilmiy ishlarga jalb qilish. Tarixiy va ijtimoiy tadqiqotlarni o‘tkazish va natijalarini amaliyotda qo‘llash. Amaliy faoliyat: Ijtimoiy fanlarni o‘qitish bo‘yicha metodik ishlanmalar yaratish. O‘quvchilar va talabalar uchun huquqiy va madaniy treninglar tashkil qilish. Sotsiologik tadqiqotlar va jamiyat muammolarini hal qilish bo‘yicha loyihalar ishlab chiqish. Hamkorlik va imkoniyatlar: Mahalliy va xalqaro ilmiy markazlar bilan hamkorlik. Talabalar uchun xalqaro konferensiyalar va forumlarda qatnashish imkoniyatlari. Davlat tashkilotlari va NNTlar bilan ijtimoiy loyihalarni amalga oshirish."
        },
    ]
    return (
        <div>
            <EducatorsCards/>
            <AboutFaculty data={aboutData}/>
        </div>
    )
}
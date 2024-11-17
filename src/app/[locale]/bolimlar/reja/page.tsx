"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react'
import Plan1 from "@/assets/plan1.webp"
import Plan2 from "@/assets/plan2.webp"
import { IoCloseSharp } from 'react-icons/io5';
const Plan = () => {
    const t = useTranslations()
  const [active, setActive] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActive(active === index ? null : index);
  };
  const desc = [
    {
        title: "BO‘LIMNING ASOSIY VAZIFASI",
        desc: " O‘zbekiston Respublikasining Oliy ta’limga oid Qonunlari, Prezident Farmonlari, Farmoyishlari, Qarorlari, Vazirlar Mahkamasining Qarorlari, Oliy ta’lim fan va innovatsiyalar vazirligining Hay’at Qarorlari, buyruqlari, yo‘riq xat, modemogramma va telefonogrammalarini, shuningdek, Reja-moliya bo‘limiga tegishli institut buyruqlarining bajarilishini ta’minlash; O‘zbekiston Respublikasi Prezidenti va hukumati tomonidan qabul qilingan farmon va qarorlar mazmunini talabalarga yetkazib borish; Bo‘limning barcha faoliyati va xodimlarini umumiy boshqarish; Bo‘limning ish rejalarini tuzish va ularning ijrosini ta’minlash; To‘lov-shartnoma asosida o‘qiyotgan talabalarning to‘lov shartnomalari bo‘yicha hisob-kitob ishlarini olib borish va muntazam ravishda fakultetlarga tegishli ma’lumotlarni yetkazib borilishini ta’minlash; Bakalavriat yo‘nalishlari mutaxassisliklari bo‘yicha xizmatlar bozori konyukturasini o‘rganish va tahlil qilish; Yangi o‘quv yili qabul rejasining bajarilishi (to‘lov-kontrakt bo‘yicha qabul rejasi, tushgan arizalar, konkurs, qabul qilingan talabalar soni, ularning kurslar, ta’lim yo‘nalishlari (mutaxassisliklar) bo‘yicha taqsimlanishi, o‘qitish tillari va h.k.) haqida ma’lumotlar bankini yaratish va institut raxbariyatiga taqdim qilish;"
    },
    {
        title: "REJA-MOLIYA BO‘LIMI HODIMLARINING BURCHLARI",
        desc: "Xizmat vazifalarini halol va vijdonan bajarish. Mehnat intizomiga, institut ichki tartib-qoidalariga rioya qilish hujjatlarni tashqariga rektorni ruxsatisiz chiqarishga yo‘l qo‘ymaslik. Institut rektorining buyruq va farmoishlarini o‘z vaqtida va sifatli bajarish. Institutga taaluqli bo‘lgan barcha hujjatlarning butligini, saqlanishini, mehnat muhofazasini, texnika xavfsizligi qoidalarini ta`minlash. Sanitariyasi talablariga (Institut mol-mulkini toza asrab-avaylash) rioya qilish."
    },
    {
        title: "BOSH MUTAXASSIS VAZIFALARI:",
        desc: "Namunaviy shtatlar jadvalini tuzish va shtat intizomini nazorat qilish; Professor-o‘qituvchi va xodimlarni moddiy rag‘batlantirish xarajatlar smetasining har chorak xisobotini tuzish va ularni institut raxbariyatiga taqdim etish; Bo‘lim boshlig‘ining topshiriq va ko‘rsatmalarini o‘z vaqtida sifatli bajarish; Talabalar kontingentini har oyning 1-15 holatiga tuzib borish; Yuqori tashkilotlardan kelgan xatlarga javobni kompyuterga kiritish va chop qilish va boshqalar."
    },
    {
        title: "YETAKCHI MUTAXASSISNING VAZIFALARI:",
        desc: " Oliy ta’lim vazirligi hаmdа yuqori tashkilotlardan kelgan хаt va tоpshiriqlarni belgilangan muddatdan kechiktirmasdan bajarish; Yangi o‘quv yili uchun qabul qilinayotgan professor- o‘qituvchilar va hodimlar oylik maoshlarini yozib borish; Har oyning birinchi sanasiga talabalar kontingentini hamda professor- o‘qituvchilar va hodimlar sonini aniqlab borish; Shtat intizomini qatiy nazorat qilib borish; Bo‘limdа kirish, chiqish xatlarni ro‘yxatini olish vа boshqalar."
    },
    {
        title: "REJA-MOLIYA BO‘LIMI XODIMLARINING HUQUQ VA MAJBURIYATLARI",
        desc: "· Reja-moliya bo‘limini rektor tomonidan tayinlangan boshliq boshqarib boradi va unga shu bo‘limdagi barcha xodimlar bo‘ysinadi; Reja-moliya masalalari bo‘yicha ko‘rsatmalar va topshiriqlarni o‘z vaqtida sifatli bajarish; Byudjetdan tashqari mablag’lari sarflanishini nazorat qilish; Reja-moliya masalalari bo‘yicha yozishmalar olib borish; Mehnat intizomiga qat’iy rioya qilish va boshqalardan ibora"
    },
    {
        title: "BILISHI KERAK:",
        desc: "· Oliy ta’limga tegishli qonunlar, O‘zbekiston Respublikasi Prezidenti Farmonlari, qarorlari, Vazirlar Mahkamasining Qarorlari, Vazirlikning Hay’at Qarorlari, Yo‘riqnomalari, buyruqlarini, Institut buyruqlarini, Institut Ustavi, ichki mehnat tartib-qoidalarini, bo‘lim faoliyatiga oid boshqa me’yoriy hujjatlarni."
    },
    {
        title: "MALAKA TALABLARI:",
        desc: "· Oliy ta’lim muassasalarida boshqaruv lavozimida zarur bo‘lgan kasbiy va tashkilotchilik qobiliyatlariga, ta’lim sohasida rahbarlik ish tajribasi va stajiga, faoliyat turi va vakolatlari doirasida tegishli bilim va ko‘nikmalarga; Namunaviy shaxsiy fazilatlarga-intellekt, madaniyatli, yetakchilik, ijodiy qobiliyatlar, xushmuomalalik, tashkilotchilik, tashabbuskorlik va tadbirkorlik qobiliyatlariga ega bo‘lish, mas’uliyat hissi, mustaqil qaror qabul qilish va ish tutish, qat’iy harakat qilish, muassasa strategik maqsadlariga erishishni ta’minlash xususiyatlariga; Bo‘lim yo‘nalishi bo‘yicha kamida 3 yillik samarali ish stajiga ega bo‘lishi zarur."
    },
  ]
  return (
    <div>
      <div className='flex flex-col items-center gap-10 justify-center py-16'>
        <div className='flex items-start max-w-[1100px] w-full gap-[40px]'>
            <Image src={Plan1} alt='image' width={500} height={500} className='w-[260px] h-[260px] object-contain'/>
            <div className='w-full'>
                <div className='flex w-full gap-3 justify-between'>
                    <div>
                        <h3 className='text-[26px] font-[600]'>{t("section3.name1")}</h3>
                        <span>{t("section3.place1")}</span>
                    </div>
                    <span className='text-[20px] font-bold flex flex-col items-end'>
                        {t("section3.duration1")}
                        <span>15:00 - 17:00</span>
                    </span>
                </div>
                <div className='mt-[50px]'>
                    <h4 className='text-[20px] font-bold'>{t("section3.address1")}</h4>
                    <h4 className='text-[20px] font-bold'>+998 99 822 58 64</h4>
                    <a href="mail: maruf_dust@mail.ru">maruf_dust@mail.ru</a>
                </div>
            </div>
        </div>
        <div className='flex items-start max-w-[1100px] w-full gap-[40px]'>
            <Image src={Plan2} alt='image' width={500} height={500} className='w-[260px] h-[260px] object-contain'/>
            <div className='w-full'>
                <div className='flex w-full gap-3 justify-between'>
                    <div>
                        <h3 className='text-[26px] font-[600]'>{t("section3.name2")}</h3>
                        <span>{t("section3.place2")}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-start max-w-[1100px] w-full gap-[40px]'>
            <Image src={Plan2} alt='image' width={500} height={500} className='w-[260px] h-[260px] object-contain'/>
            <div className='w-full'>
                <div className='flex w-full gap-3 justify-between'>
                    <div>
                        <h3 className='text-[26px] font-[600]'>{t("section3.name3")}</h3>
                        <span>{t("section3.place3")}</span>
                    </div>
                </div>
            </div>
        </div>
        
      <div className=' max-w-[1200px] w-full mt-[50px]'>
        <div className='w-full'>
            <ul style={{ padding: "10px", background: "#fff" }}>
              {
                desc?.map((item,index)=> {
                    return <li key={index} className='py-5 border-b'>
                        <div className='flex gap-2 items-center justify-between'>
                            <h2 className='text-[22px] font-bold'>{item?.title}</h2>
                            <button onClick={()=>handleItemClick(index)} className={`hover:bg-slate-200 p-2 rounded-full transition-all`}><IoCloseSharp size={30} className={`ease-linear duration-200 ${active === index ? "" : "rotate-[-45deg]"}`}/></button>
                        </div>
                        {active === index && <p>{item?.desc}</p>}
                    </li>
                })
              
              }
            </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Plan

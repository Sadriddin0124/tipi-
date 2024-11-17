"use client"
import React, { useState } from 'react'
import HeroImage from "@/assets/section1.jpg"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { IoCloseSharp } from 'react-icons/io5'
const ScientificSection = () => {
  const desc = [
  `• O‘zbekiston Respublikasi qonunlari, Prezident farmonlari va farmoyishlari, Oliy Majlis va Vazirlar Mahkamasining ta’lim va kadrlar tayyorlash sohasidagi qarorlarini amalga oshirishni tashkil etish; `,
  `• Davlat ta’lim standartlari asosida ilmiy ishlarni tashkil etish va malakali kadrlar tayyorlashni ta’minlash; `,
  `• Davlat ta’lim standartlariga muvofiq bilimlar mazmuni va tayyorgarlik darajasiga qo‘yiladigan talablar majmuasini barcha dekanlar va bo‘limlar, kafedra mudirlari va pedagog o‘qituvchilarning to‘liq bilishini ta’minlash; `,
  `• Mutasaddi yuqori tashkilotlarning buyruqlarini, farmoyishlari va ko‘rsatmalarini, ilmiy jarayonlarga oid masalalar bo‘yicha institut ilmiy kengashi qarorlari va rektor buyruqlarining bajarilishini tashkil qilish; `,
  `• Ilg‘or mamlakatlar ta’lim tizimining rivojlanish tendensiyalarini o‘rganish, “Ta’lim to‘g‘risida”gi qonun, “Kadrlar tayyorlash milliy dasturi” va boshqa ta’limga oid qonunlar ko‘rsatilgan vazifalarni amalga oshirish borasidagi uslub va vositalarni ishlab chiqish va ularning amalga oshirilishini ta’minlash; `,
  `• O‘quv-tarbiya jarayonida o‘qitishning ilg‘or shakllarini, shu jumladan masofadan turib o‘qitish, yangi pedagogik va axborot-kommunikatsiya texnologiyalarini joriy etish va ulardan samarali foydalanishni tashkil etish; `,
  `• Faoliyat yo‘nalishi bo‘yicha takliflar tayyorlash va ishlarni tashkil etish; `,
  `• Ilmiy tadqiqotchilik jarayonini ta’minlaydigan bo‘limlar, dekanatlar, ilmiy laboratoriyalar, ilmiy jamoalar ishlarini muvofiqlashtirish, tashkil etish va nazorat qilish; `,
  `• Bo‘limlar, fakultet va kafedralar, ilmiy laboratoriyalarning ilmiy tadqiqot sohasi bo‘yicha ish rejalarini tasdiqlash va ularning bajarilishini nazorat qilish; `,
  `• Ilmiy tadqiqot ishlarining sifatini oshirish, professor-o‘qituvchilarning shaxsiy rejalari bajarilishini nazorat qilish va ta’minlash; `,
  `• O‘quv va ilmiy konferensiyalarni tashkil etish, institut ilmiy-texnik kengashi ishlariga rahbarlik qilish, ilg‘or ilmiy va uslubiy tajribalarni umumlashtirish; `,
  `• Ilmiy ishlar materiallarini, shu jumladan, jurnallar va ilmiy ishlar to‘plamlarini institut xodimlari tomonidan tayyorlash va nashr etish jarayoni hamda institutning barcha ta’lim va ilmiy faoliyat yo‘nalishlari bo‘yicha ilmiy davriy nashrlar bilan kutubxona fondini to‘ldirib turish bo‘yicha umumiy rahbarlikni olib borish; `,
  `• Iqtidorli yoshlarni qidirish, saralash va ular bilan ishlash jarayonlarini boshqarish va ularga ko‘maklashish, talaba va stajor-tadqiqotchi-izlanuvchilar orasidan O‘zbekiston Respublikasi Prezidenti, Navoiy, Beruniy, Ulug‘bek, Zulfiya va boshqa nomdagi nufuzli stipendiya sovrindorlarini tayyorlash jarayonini boshqarish; `,
  `• Professor-o‘qituvchilar va ilmiy tadqiqot ishlariga yordamlashuvchi xodimlar shtatlari bo‘yicha takliflarni ishlab chiqish, kafedralar, bo‘limlar va ilmiy laboratoriyalarni malakali kadrlar bilan ta’minlash ishlarini tashkil etish; `,
  `• Bo‘sh lavozimlarga tanlov asosida ishga qabul qilish, doktorantlar, mustaqil tadqiqotchilar va magistrlarni ishga olib qolish bo‘yicha takliflar tayyorlash, professor-o‘qituvchilar tarkibini yaxshilash rejalarini ishlab chiqish va amalga oshirishga tashabbuskorlik qilish; `,
  `• Ilmiy laboratoriyalaridan unumli foydalanish, laboratoriyalarni texnik jihozlashni takomillashtirish masalalarini ishlab chiqish; `,
  `• Ilmiy tadqiqot va ta’lim mazmunini takomillashtirish, mutaxassis-kadrlarni xalqaro talablar asosida tayyorlashni ta’minlash maqsadida xorij mamlakatlarning nufuzli ilmiy markazlari va turdosh oliy ta’lim muassasalari bilan hamkorlikda ilmiy tadqiqot ishlarini tashkil etish bo‘yicha takliflar tayyorlash; `,
  `• Kafedralar, fakultet va bo‘limlarning yillik ilmiy faoliyati hisobotlarini o‘tkazish, tahlil qilish va xulosalar chiqarish, professor-o‘qituvchilarning ilmiy faoliyatini zamonaviy usullarda baholashni amalga oshirish; `,
  `• Oliy ta’lim muassasalari bilan ilmiy yo‘nalishda doimiy hamkorlikni amalga oshirish, konferensiya, seminarlarda professor-o‘qituvchilarning faol ishtirokini ta’minlash, mahalliy hokimiyatlar bilan hamkorlikda ishlash; `,
  `• O‘rnatilgan tartibda institutning yillik reytingini aniqlash, tahlil qilish, faoliyatni takomillashtirishga oid ishlarni amalga oshirish; `,
  `• Institutni xalqaro TOP reytinglarga kirishi bo‘yicha istiqbolli rejalar ishlab chiqish va ushbu rejalarni amalga oshirishda tashabbus ko‘rsatish; `,
  `• Institutni o‘rnatilgan tartibda doimiy ichki ilmiy-pedagogik attestatsiyadan o‘tkazish, tashqi attestatsiyaga tayyorlash va o‘tkazishda faol ishtirok etish.`,]
  const t = useTranslations()
  const [active, setActive] = useState<boolean>(false);

  const handleItemClick = () => {
    setActive(!active);
  };

  return (
    <div className='flex flex-col items-center gap-10 justify-center py-16'>
      <div className='flex items-start max-w-[1100px] w-full gap-[40px]'>
        <Image src={HeroImage} alt='image' width={500} height={500} className='w-[260px] h-[260px]'/>
        <div className='w-full'>
            <div className='flex w-full gap-3 justify-between'>
                <div>
                    <h3 className='text-[26px] font-[600]'>{t("section1.name")}</h3>
                    <span>{t("section1.place")}</span>
                </div>
                <span className='text-[20px] font-bold flex flex-col items-end'>
                    {t("section1.duration")}
                    <span>15:00 - 17:00</span>
                </span>
            </div>
            <div className='mt-[50px]'>
                <h4 className='text-[20px] font-bold'>{t("section1.address")}</h4>
                <h4 className='text-[20px] font-bold'>+998 99 822 58 64</h4>
                <a href="mail: maruf_dust@mail.ru">maruf_dust@mail.ru</a>
            </div>
        </div>
      </div>
      <div className=' max-w-[1200px] w-full mt-[50px]'>
        <div className='w-full'>
          <div className='flex gap-2 items-start'>
            <h2 className='text-[26px] font-bold'>{t("section1.about_t")}</h2>
            <button onClick={handleItemClick} className={`hover:bg-slate-200 p-2 rounded-full transition-all`}><IoCloseSharp size={30} className={`ease-linear duration-200 ${active ? "" : "rotate-[-45deg]"}`}/></button>
          </div>
          {active && (
            <ul style={{ padding: "10px", background: "#fff" }}>
              {
                desc?.map((item,index)=> {
                    return <li key={index}>{item}</li>
                })
              
              }
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default ScientificSection

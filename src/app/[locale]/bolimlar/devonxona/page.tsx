"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react'
import Devon1 from "@/assets/devon1.webp"
import { IoCloseSharp } from 'react-icons/io5';
const Devonxona = () => {
  const t = useTranslations()
  const [active, setActive] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActive(active === index ? null : index);
  };
  const desc = [
    {
      title: "DEVONXONA NIZOMI",
      desc: "DEVONXONA NIZOMI Devonxona institutning mustaqil ish yurituvchi tarkibiy bo’limi xisoblanadi, institut ustaviga asosan rektorga bo’ysinadi. Devonxona Oʻzbekiston Respublikasi Qonunlari, Oʻzbekiston Respublikasi Prezidentining Farmonlari, Qarorlari va Farmoyishlari, Oʻzbekiston Respublikasi Vazirlar Mahkamasi Qarorlari, Farmonlari, Qonunlari, Farmoyishlari, Buyruqlari, Hay’at tomonidan qabul qilingan qarorlar,Respublikaning tegishli me’yoriy-uslubiy hujjatlari asosida ish yuritadi. Devonxona hujjat qabul qilish, tashqi va ichki kirim-chiqim xatlari, yozishmalarni, institut ichki buyruqlarini qayd qilib ularni masʼul xodimlarga topshiradi.  Devonxona va arxiv hujjatlarni saqlash va ularni tegishli boʻlgan qonun-qoidalarga rioya qilib, ish olib boradi, yaʼni:  Ish yuritishdagi hujjatlarni roʻyxatdan oʻtkazish;  Bajarilishini nazorat qilish;  Muddati tugagan hujjatlarni hisobdan chiqarish;  Devonxona ish yuritishda hujjatlarni tasdiqlash uchun institut nomi koʻrsatilgan dumaloq muxr, jismoniy va yuridik shaxslarning murojaatlarini roʻyxatga olish muxri va toʻrtburchak shtamp mavjud."
    },
    {
      title: "DEVONXONANING ASOSIY VAZIFALARI",
      desc: "1.Institutda ish olib borishni tashkil etish, ish yuritish intizomi talablariga rioya qilish va takomillashtirish, hujjatlar bilan ishlash jarayonida maxfiylikni ta’minlash. Ish yuritishdagi muxr va shtapmlardan foydalanishni, ularni hisobga olinishini va saqlanishini taʼminlash. Devonxona boʻlimida mavjud institut nomenklaturasi asosida boʻlimlarda hujjatlarning toʻgʻri yuritilishi, kirish-chiqish xatlarining qayd qilish kitoblarini yuritilishini nazorat qilish. Saqlash muddati tugagan hujjatlarni oʻz vaqtida arxivga topshirishni tashkil etish. Institut tarkibiy tuzilmasidagi boʻlimlar va yuritiladigan jurnallarni nazorat qilish, kirish, chiqish hujjatlarini vaqtida va toʻgʻri qayd etish. Xatlar va hujjatlarni qabul qilish va vaqtida javob xatini joʻnatish. Dekanatlar va boʻlimlarga tegishli hujjatlarni tarqatish. Devonxona va arxiv ishchilarining malakasini oshirish choralarini koʻrish. Devonxona mazkur Nizom hamda boshqa normativ-huquqiy hujjatlar bilan oʻz zimmasiga yuklatilgan barcha vazifalarning bajarilishini ta’minlash uchun javobgardir. .Devonxona oʻz dumaloq muxriga ega. Ushbu muxr devonxona boshligʻida saqlanadi."
    },
  ]
  return (
    <div>
      <div className='flex flex-col items-center gap-10 justify-center py-16'>
        <div className='flex items-start max-w-[1100px] w-full gap-[40px]'>
          <Image src={Devon1} alt='image' width={500} height={500} className='w-[260px] h-[260px] object-contain' />
          <div className='w-full'>
            <div className='flex w-full gap-3 justify-between'>
              <div>
                <h3 className='text-[26px] font-[600]'>{t("section4.name1")}</h3>
                <span>{t("section3.place1")}</span>
              </div>
              <span className='text-[20px] font-bold flex flex-col items-end'>
                {t("section4.duration1")}
                <span>15:00 - 17:00</span>
              </span>
            </div>
            <div className='mt-[50px]'>
              <h4 className='text-[20px] font-bold'>{t("section4.address1")}</h4>
              <h4 className='text-[20px] font-bold'>+998 55 900 06 04</h4>
              <a href="mail: maruf_dust@mail.ru">TIPI@exat.uz</a>
            </div>
          </div>
        </div>
        <div className=' max-w-[1200px] w-full mt-[50px]'>
          <div className='w-full'>
            <ul style={{ padding: "10px", background: "#fff" }}>
              {
                desc?.map((item, index) => {
                  return <li key={index} className='py-5 border-b'>
                    <div className='flex gap-2 items-center justify-between'>
                      <h2 className='text-[22px] font-bold'>{item?.title}</h2>
                      <button onClick={() => handleItemClick(index)} className={`hover:bg-slate-200 p-2 rounded-full transition-all`}><IoCloseSharp size={30} className={`ease-linear duration-200 ${active === index ? "" : "rotate-[-45deg]"}`} /></button>
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

export default Devonxona

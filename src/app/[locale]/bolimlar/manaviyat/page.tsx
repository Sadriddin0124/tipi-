"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5';
import Manaviyat1 from "@/assets/manaviyat1.webp"
import Manaviyat2 from "@/assets/manaviyat2.webp"
const Manaviyat = () => {
    const desc1 = [
        {
            title: "“YOSHLАR BILАN ISHLАSH, MА’NАVIYAT VА MА’RIFАT” BO‘LIMI NIZOMI",
            desc: "Yoshlar bilan ishlash, maʼnaviyat va maʼrifat” bo‘limi institutda olib boriladigan maʼnaviy-maʼrifiy ishlarga boshchilik qilish, bo‘limga tegishli normativ hujjatlarda belgilangan ko‘rsatmalarni muvofiqlashtirish, bo‘limlar, jamoat ishlarida va kafedralarning maʼnaviy-maʼrifiy tajribalarini umumlashtirish, adabiyotlar tayyorlash va ularni nashr qildirish, talabalarning maʼnaviy dunyosini shakllantirishga qaratilgan chora-tadbirlarni amalga oshirish maqsadida tuziladi."
        },
        {
            title: "Umumiy qoidalar:",
            desc: "Bo‘lim institut rektorining buyrug‘i asosida tuziladi; Bo‘limning ishchi guruhi institutning ushbu soha bo‘yicha yetakchi mutaxassislari, professor-o‘qituvchilardan tarkib topadi; Bo‘lim Yoshlar bilan ishlash, ma’naviy-ma’rifiy ishlar bo‘yicha birinchi prorektor boshchiligida faoliyat olib boradi; O‘z faoliyatini yo‘lga qo‘yishda bo‘lim fakultet dekanlari, bo‘lim boshliqlari kafedra ham guruh rahbarlari bilan birgalikda ish olib boradi; Oliy taʼlim, fan va innovatsiyalar vazirligi qoshidagi Maʼnaviyat va maʼrifat markazining nizomi asosida ish olib boradi hamda joriy va kelajakdagi ish rejalariga asoslanib ish yuritadi."
        },
        {
            title: "Bo‘limning maqsadi:",
            desc: "Talaba-yoshlarni milliy va umuminsoniy qadriyatlariga sodiqlik ruhida tarbiyalash, ularning ruhiy-estetik dunyoqarashini kengaytirish, tafakkurini yuksaltirish, har xil ommaviy madaniyat xurujlaridan avaylab-asrash, ularni bu yo‘llardan qaytarish, Mustaqil O‘zbekistonning haqiqiy fidoyisi bo‘lib kamol topishini shakllantirishdan iborat."
        },
        {
            title: "Bo‘limning vazifalari:",
            desc: " Mamlakatimizda amalga oshirilayotgan maʼnaviy-maʼrifiy ishlarga bog‘liq chora-tadbirlarni o‘tkazish; Talaba-yoshlar orasida maʼnaviy-axloqiy, estetik, siyosiy, huquqiy, olijanoblik fazilatlarini shakllantirishni yo‘lga qo‘yish; Milliy urf-odatlar, qadriyatlar asosida olib borilayotgan anjumanlar, uchrashuvlar tashkil qilish; Talabalarning ruhiy va jismoniy qobiliyatini shakllantirish maqsadida olib boriladigan ishlarni shakllantirishga ko‘maklashish; Institutda maʼnaviy-axloqiy tarbiya ishlarini belgilash, ularga zarur normativ hujjatlar ham tavsiyalar ishlab chiqish; Respublika maʼnaviyat va maʼrifat markazining shahar, tuman bo‘limlari hamda mamlakatimizda xizmat ko‘rsatib kelayotgan fondlar, ijtimoiy tashkilotlar bilan birgalikda maʼnaviy-axloqiy ishlarni shakllantirish. "
        },
        {
            title: "Bo‘limning huquqlari:",
            desc: "Fakultetlardagi maʼnaviy-axloqiy ishlarni nazorat qilish; Maʼnaviy-axloqiy ishlarga bog‘liq vazirlik buyruqlari ham ko‘rsatmalarni fakultetlardagi bajarilishini tekshirish; Dekanning yoshlar bilan ishlash bo‘yicha o‘rinbosarlarini saylash hamda vazifalardan ozod qilishga bog‘liq yig‘ilishlarda doimiy ravishda o‘z tavsiyalari bilan qatnashadi; Yoshlar bilan ishlash bo‘yicha fakultet dekanlari va kafedra mudirlariga ko‘rsatmalar, tavsiyalar beradi; Professor-o‘qituvchilarning yillik o‘quv yuklamalarida «Maʼnaviy-maʼrifiy ishlari» sohasiga tegishli bandiga to‘liq bajarilishini nazorat qiladi va uni baholaydi; Maʼnaviy-axloqiy tarbiya ishlari bo‘yicha dekan o‘rinbosarlari olib boradigan ishlar bo‘yicha har semestr yakunida bo‘lim boshlig‘iga hisobot beradi; Maʼnaviy-axloqiy ishlarni shakllantirish, yaxshi namuna ko‘rsatgan bo‘lim, fakultet, kafedra jamoatini moddiy va maʼnaviy rag‘batlantirishga tavsiyalar beradi. "
        },
    ]
    const desc2 = [
        {
            title: "Yoshlar bilan ishlash bo‘yicha birinchi prorektorning lavozim vazifalari:",
            desc: "O‘zbekiston Respublikasi qonunlari, Prezident farmonlari va farmoyishlari, Oliy Majlis va Vazirlar Mahkamasining ta’lim va kadrlar tayyorlash sohasidagi qarorlarini amalga oshirishni tashkil etish;  Ma’naviy va tarbiyaviy ishlarni tashkil etish va malakali kadrlar tayyorlashni ta’minlash;  Ma’naviy-ma’rifiy va tarbiya jarayonlariga oid masalalar bo‘yicha mutasaddi yuqori tashkilotlar buyruqlari, farmoyishlari va ko‘rsatmalari, TIPIning Kengashi qarorlari va rektor buyruqlari va farmoyishlari bajarilishini tashkil qilish;  Ma’naviy-ma’rifiy va tarbiyaviy jarayonlarni ta’minlaydigan bo‘limlar, dekanatlar ishlarini muvofiqlashtirish  va nazorat qilish;  Bo‘limlar, fakultet va kafedralar ma’naviy-ma’rifiy jarayoniga oid ish rejalarni tasdiqlash va ularning bajarilishini nazorat qilish;  Professor-o‘qituvchilar va o‘quv ishiga yordamlashuvchi xodimlar shtatlari bo‘yicha takliflarni ishlab chiqish, kafedralar va bo‘limlarni malakali kadrlar bilan ta’minlash ishlarini tashkil etishda ishtirok etish;   Oliy ta’lim muassasalari bilan ma’naviy-ma’rifiy yo‘nalishda doimiy hamkorlikni amalga oshirish, konferensiya, seminarlarda professor-o‘qituvchilarning faol ishtirokini ta’minlash, mahalliy hokimiyatlar bilan hamkorlikda ishlash;  O‘rnatilgan tartibda TIPIning yillik reytingini aniqlash, tahlil qilish, ma’naviy-ma’rifiy faoliyatini takomillashtirishga oid ishlarni amalga oshirish;  TIPIni o‘rnatilgan tartibda doimiy ichki attestatsiyadan o‘tkazish, tashqi attestatsiyaga tayyorlash va o‘tkazishda faol ishtirok etish. Yuksak ma’naviy-axloqiy fazilatli, mustaqil fikrlashga qodir bo‘lgan yuqori ma’lumotli, malakali kadrlar tayyorlashni ta’minlash;  TIPIda ijro intizomini mustahkamlash, kadrlarni tanlash, tarbiyalash va o‘qitish masalalari bilan doimiy shug‘ullanish hamda ularni lavozimlariga tayinlash bo‘yicha takliflar berish;  TIPIga yangi qabul qilinayotgan xodimlarni ishga qabul qilishda bevosita ishtirok etish;  TIPIning barcha bo‘limlari, fakultetlaridagi ma’naviy-ma’rifiy ishlarni nazorat kilish, tegishli vazirlik va idoralar buyruqlari hamda ko‘rsatmalarining o‘z vaqtida bajarilishini tekshirib borish;  TIPIning ma’naviy-axloqiy masalalar samaradorligi va sifatini oshirish bo‘yicha fakultet dekanlari va kafedra mudirlariga ko‘rsatmalar, tavsiyalar berish;  Ijtioiy-gumanitar yo‘nalishdagi kafedralarga umumiy rahbarlik qilish va ularga kadrlarni qabul qilishda suhbatdan o‘tkazish;  TIPI professor-o‘qituvchilarining yillik o‘quv yuklamalarida “Ma’naviy-ma’rifiy ishlari sohasiga tegishli bandining to‘liq bajarilishini nazorat qilish va uni baholash;  Ma’naviy-axloqiy ishlarni shakllantirish, yaxshi namuna ko‘rsatgan bo‘lim, fakultet, kafedra jamoasi yoki professor-o‘qituvchilarini moddiy va ma’naviy rag‘batlantirishga tavsiyalar berish, shu jumladan, davlat mukofatlariga tavsiya berishda ishtirok etish;  TIPI moliyaviy budjetidan ma’naviy-ma’rifiy ishlar uchun ajratilgan moliyaviy resurslar doirasida o‘rnatilgan tartibda foydalanishni amalga oshirish;  TIPI psixologi va talabalar turar joyi tarbiyachi-pedagoglari, psixologik xizmatning faoliyatini nazorat qilish va muvofiqlashtirish;  Chet elga chiqib ketayotgan talabalar, professor-o‘qituvchilar va ishchi-xodimlarni suhbatdan o‘tkazish va ular bilan tegishli tartibda tushuntirish ishlarini olib borish;  Professor-o‘qituvchilar, xodimlar va talabalarni ijtimoiy qo‘llab-quvvatlash va moddiy rag‘batlantirish komissiyasiga rahbarlik qilish;  Har bir o‘qituvchining yillik rejasini ko‘rib chiqish, unda ma’naviy-ma’rifiy masalalar bo‘lishini talab kilish va hisobotini so‘rash;  Bitiruvchi talabalar uchun ijtimoiy-gumanitar fanlardan o‘tkaziladigan davlat attestatsiyasi hay’ati raisi va a’zolariga imtixon yuzasidan takliflar, loyihalar kiritish;  Mehnatni muhofaza qilish, xavfsizlik texnikasi va ishlab chiqarish sanitariyasi talablariga rioya qilish;   O‘z mehnat vazifalarini halol, vijdonan bajarish, mehnat va ijro intizomiga rioya qilish;  Lavozim (vazifa) yo‘riqnomasiga rioya qilish "
        },
        {
            title: "Bilishi kerak:",
            desc: "O‘zbekiston Respublikasi qonunlari, Prezident farmonlari, farmoyishlari, Vazirlar Mahkamasi qarorlari, Vazirlik buyruqlarini, TIPI Ustavi va Ichki mehnat tartib va Odob-ahloq qoidalariga rioya qilinishini nazorat qilish, ma’naviy-ma’rifiy va tarbiya jarayoniga oid  boshqa normativ hujjatlarni. "
        },
        {
            title: "Malaka talablari:",
            desc: "TIPIda boshqaruv lavozimida zarur bo‘lgan kasbiy va tashkilotchilik qobiliyatlariga, ta’lim sohasida rahbarlik ish tajribasi va stajiga, faoliyat turi va vakolatlari doirasida tegishli bilim va ko‘nikmalarga; Namunaviy shaxsiy fazilatlarga-intellekt, madaniyatli, yetakchilik, xushmuomalalik, tashkilotchilik, tashabbuskorlik, tadbirkorlik hamda ijodiy qobiliyatlarga ega bo‘lish, mas’uliyat hissi, mustaqil qaror qabul qilish va ish tutish, qat’iy harakat qilish, muassasa strategik maqsadlariga erishishni ta’minlash xususiyatlariga; TIPIda bakalavr va magistrlar tayyorlash yo‘nalishlari mutaxassisliklaridan biri bo‘yicha fan doktori yoki nomzodi ilmiy darajasiga, professor yoki dotsent ilmiy unvoniga ega bo‘lishi; TIPIning tegishli boshqaruv bo‘g‘inlarida-kafedra mudiri, fakultet dekani yoki o‘rinbosari kabi rahbarlik lavozimlarida kamida 7 yillik samarali ish stajiga ega bo‘lishi zarur"
        },
        {
            title: "Yoshlar bilan ishlash, ma’naviyat va ma’rifat bo‘limi boshlig‘ining lavozim vazifalari:",
            desc: "Yoshlar bilan ishlash, ma’naviy va ma’rifiy ishlarni tashkil etish va muvofiqlashtirish; Ta’lim va tarbiya jarayonining oʻzaro muvofiqligini ta’minlash,  talabalar oʻrtasida loyiha va tanlovlar tashkil etish; Talabalarning ma’naviy dunyoqarashini milliy va zamonaviy qarashlar asosida rivojlantirish; Vatanparvarlik ruhida tarbiyalash, jamiyatning toʻlaqonli a’zosi, oʻz kasbining etuk mutaxassisi boʻlib etishishiga koʻmaklashish; Yoshlar ongi va qalbida ma'naviy fazilatlarni kamol toptirishga koʻmaklashish; Talabalar orasida sogʻlom ma'naviy muhitni yaratish, ularda madaniyat, san'at, sport, kitobxonlik sohalariga boʻlgan qiziqishlarni chuqurlashtirish; Talabalarning boʻsh vaqtlarini mazmunli tashkil etish choralarini koʻrish; Iqtidorli talabalarni aniqlash, ularni qoʻllab-quvvatlash; Mamlakatimizda amalga oshirilayotgan islohotlarning mazmun-mohiyatini talabalarga etkazish; Milliy urf-odatlar, an'analar va qadriyatlar targʻibotiga bagʻishlangan anjumanlar, davra suhbatlari, uchrashuvlar va boshqa tadbirlarni tashkil etish; Yoshlar bilan ma'naviy-ma'rifiy yoʻnalishdagi chora-tadbirlarini ishlab chiqishda ishtirok etish, ularni bajarilishini ta’minlash; Talabalarning tibbiy madaniyatini oshirish, sogʻlom turmush tarzini targʻib qilishga qaratilgan ishlarni tashkillashtirish; Ijtimoiy himoyaga muhtoj talabalarni qoʻllab-quvvatlash boʻyicha zaruriy choralarni koʻrish; Talabalarning ma’naviy-axloqiy saviyasi va madaniy ehtiyojlarini aniqlash maqsadida ular orasida ijtimoiy soʻrovnomalar oʻtkazish, tahlil qilish hamda tegishli takliflar kiritish; Yoshlar bilan ishlash, ma’naviy va ma’rifiy ishlarni tashkil etish va amalga oshirish sohasida boshqa tashkilot va muassasalar bilan hamkorlik qilish; Yoshlar bilan ishlash, ma’naviy va ma’rifiy ishlarni tashkil etish va amalga oshirish faoliyatini takomillashtirish yuzasidan tizimli tahlil asosida takliflar ishlab chiqish va kiritish; Talabalar, tinglovchilar va fuqarolarni qabul qilish; Jismoniy va yuridik shaxslarning murojaatlarini koʻrib chiqish; Qonunchilikni targʻib qilish, jamiyatda huquqiy madaniyatni yuksaltirish; Idoraviy va normativ-huquqiy hujjatlar loyihalarini ishlab chiqishda ishtirok etish hamda sektorning rivojlanishi masalalarida maslahatlar berish hamda sektor yigʻilishlarida ma'lumotlar va kun tartibiga masalalar kirtib borish va qonun hujjatlariga muvofiq boshqa vazifalarni bajaradi "
        },
        {
            title: "Yoshlar bilan ishlash ma’naviyat - ma’rifat bo‘limi bosh mutaxassisi (ulsubchisi)ning lavozim vazifalari:",
            desc: "O‘z mehnat vazifalarini halol, vijdonan bajarish, mehnat va ijro intizomiga rioya qilish; Bo‘lim bilan birgalikda bo‘lim zimmasiga yuklatilgan barcha asosiy vazifalarni amalga oshirishga mas’ul;  Bo‘lim boshlig‘i ko‘rsatmasi asosida ta’lim muassasalari bilan aloqa o‘rnatib, ular ishini tashkil etish, muvofiqlashtirish, nazorat va monitoring qilishda hamkorlik ko‘rsatish;  Bo‘limning oylik, choraklik, yarim yillik va yillik hisobotlarini tayyorlash, guruhga topshirilgan dasturlar monitoringini o‘tkazish;  Rahbariyat tomonidan chiqarilgan buyruq va topshiriqlar ijrosini muntazam ravishda o‘z vaqtida va sifatli bajarilishini ta’minlash;  Bo‘lim boshlig‘i bilan birgalikda bo‘lim zimmasiga yuklatilgan barcha asosiy vazifalarni amalga oshirishga mas’ullik qilish;  Bo‘lim boshlig‘i topshirig‘iga binoan zarur hujjatlarni tayyorlash (yozish, tahrir qilish, muhokamasini uyushtirish);  TIPI Ustavi hamda rahbariyat buyruqlari va mehnat intizomiga qat’iy rioya qilgan holda faoliyat olib borish; Ish beruvchining qonuniy buyruq va farmoyishlarini bajarish; Mehnatni muhofaza qilish, xavfsizlik texnikasi va ishlab chiqarish sanitariyasi talablariga rioya qilish; Lavozim (vazifa) yo‘riqnomasiga rioya qilish "
        },
        {
            title: "Bilishi kerak:",
            desc: "O‘zbekiston Respublikasi qonunlari, O‘zbekiston Respublikasi Mehnat kodeksi hamda Vazirlik buyruqlarini, tarbiya jarayonini belgilangan normativ hujjatlarni TIPI Ustavi, Ichki-tartib qoidalari, Odob-ahloq kodekslari."
        },
        {
            title: "Malaka talablari:",
            desc: "TIPI tizimida boshqaruv lavozimida zarur bo‘lgan kasbiy va tashkilotchilik qobiliyatlariga, ta’lim sohasida rahbarlik ish tajribasi va stajiga, faoliyat turi va vakolatlari doirasida tegishli bilim va ko‘nikmalarga; Namunaviy shaxsiy fazilatlarga-intellekt, madaniyatli, yetakchilik, ijodiy qobiliyatlar, xushmuomalalik, tashkilotchilik, tashabbuskorlik va tadbirkorlik qobiliyatlariga ega bo‘lish, mas’uliyat hissi, mustaqil qaror qabul qilish va ish tutish, qat’iy harakat qilish, muassasa strategik maqsadlariga erishishni ta’minlash xususiyatlariga; Oliy ma’lumotga ega bo‘lishi va samarali ish stajiga ega bo‘lishi zarur"
        },
    ]
        const t = useTranslations()
        const [active, setActive] = useState<number>(0);
      
        const handleItemClick = (num: number) => {
          setActive(active === num ? 0 : num);
        };
  return (
    <div>
      <div className='flex flex-col items-center gap-10 justify-center py-16'>
      <div className='flex items-center max-w-[1100px] w-full gap-[40px]'>
        <Image src={Manaviyat1} alt='image' width={500} height={500} className='w-[260px] h-[260px]'/>
        <div className='w-full flex items-center h-full'>
            <div className='flex flex-col w-full gap-3 justify-between'>
                <h3 className='text-[26px] font-[600]'>{t("section2.name1")}</h3>
                <span>{t("section2.place1")}</span>
                <h4 className='mt-[40px]'>{t("section2.award1")}</h4>
            </div>
            <div className='mt-[50px]'>
            </div>
        </div>
      </div>
      <div className='flex items-center max-w-[1100px] w-full gap-[40px]'>
        <Image src={Manaviyat2} alt='image' width={500} height={500} className='w-[260px] h-[260px]'/>
        <div className='w-full flex items-center'>
            <div className='flex flex-col w-full gap-3 justify-between items-start'>
                <h3 className='text-[26px] font-[600]'>{t("section2.name2")}</h3>
                <span>{t("section2.place2")}</span>
            </div>
        </div>
      </div>
      <div className=' max-w-[1200px] w-full mt-[50px]'>
        <div className='w-full'>
          <div className='flex gap-2 items-start justify-between w-full py-3 border-b '>
            <h2 className='text-[26px] font-bold'>{t("section2.about1")}</h2>
            <button onClick={()=>handleItemClick(1)} className={`hover:bg-slate-200 p-2 rounded-full transition-all`}><IoCloseSharp size={30} className={`ease-linear duration-200 ${active === 1 ? "" : "rotate-[-45deg]"}`}/></button>
          </div>
          {active === 1 && (
            <ul style={{ padding: "10px", background: "#fff" }}>
              {
                desc1?.map((item,index)=> {
                    return <li key={index} className='flex flex-col items-center'>
                        <span className='text-[18px] font-bold'>{item?.title}</span>
                        <span>{item?.desc}</span>
                    </li>
                })
              
              }
            </ul>
          )}
        </div>
        <div className='max-w-[750px]'>
          <div className='flex gap-2 items-start justify-between w-full py-3 border-b '>
            <h2 className='text-[26px] font-bold'>{t("section2.about2")}</h2>
            <button onClick={()=>handleItemClick(2)} className={`hover:bg-slate-200 p-2 rounded-full transition-all`}><IoCloseSharp size={30} className={`ease-linear duration-200 ${active === 2 ? "" : "rotate-[-45deg]"}`}/></button>
          </div>
          {active === 2 && (
            <ul style={{ padding: "10px", background: "#fff" }}>
              {
                desc2?.map((item,index)=> {
                    return <li key={index} className='flex flex-col items-center'>
                        <span className='text-[18px] font-bold text-center'>{item?.title}</span>
                        <span>{item?.desc}</span>
                    </li>
                })
              
              }
            </ul>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Manaviyat

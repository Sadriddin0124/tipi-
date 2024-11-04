import { useTranslations } from 'next-intl'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    const t = useTranslations()
    const data = [
        {
            icon: <FaPhoneAlt size={20}/>,
            title: t("contact.num_t"),
            value: "+998 70 200 70 07"
        },
        {
            icon: <FaPhoneAlt size={20}/>,
            title: t("contact.mail_t"),
            value: "+998 70 200 70 07"
        },
        {
            icon: <FaPhoneAlt size={20}/>,
            title: t("contact.address_t"),
            value: t("contact.address_v"),
        }
    ]
  return (
    <section className='w-full flex justify-center px-3 py-[100px]'>
      <div className='max-w-[1133px] w-full flex flex-col gap-10 items-center'>
        <h2 className='text-[40px] font-[600]'>{t("contact.title")}</h2>
        <div className='flex gap-4 justify-between w-full'>
            <div className='flex flex-col gap-5'>
                {
                    data?.map((item,index)=> {
                        return <div key={index} className='bg_main p-6 max-w-[328px] w-full flex items-center gap-7'>
                            <span className='text_main bg-white p-3 rounded-full'>{item?.icon}</span>
                            <div className='flex flex-col text-white text-[20px] font-[600] gap-[14px]'>
                                <span>{item?.title}</span>
                                <a href="">{item?.value}</a>
                            </div>
                        </div>
                    })
                }
            </div>
            <form className='max-w-[714px] w-full flex flex-col items-start gap-5'>
                <h3 className='text-[24px] font-[600] text_main'>{t("contact.title1")}</h3>
                <div className='flex gap-[12px] w-full'>
                    <input type="text" className='contact font-[600] p-6 rounded-[10px] border border-[#404B7C] max-w-[350px] w-full' placeholder={t("contact.name_placeholder")}/>
                    <input type="text" className='contact font-[600] p-6 rounded-[10px] border border-[#404B7C] max-w-[350px] w-full' placeholder={t("contact.phone_placeholder")}/>
                </div>
                <textarea className='contact font-[600] p-6 rounded-[10px] border border-[#404B7C] w-full resize-none h-[134px]' placeholder={t("contact.message_placeholder")}></textarea>
                <button className='text-[24px] bg_main font-[600] px-6 py-5 self-end text-white rounded-[10px] border-4 border-transparent hover:border-[#404B7C] ease-linear duration-200 hover:bg-transparent hover:text-[#404B7C]'>{t("contact.btn")}</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

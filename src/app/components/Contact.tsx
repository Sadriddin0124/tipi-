"use client"
import axios from 'axios';
import { useTranslations } from 'next-intl'
import React, { ChangeEvent, ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoCloseSharp } from 'react-icons/io5';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
    const [notify, setNotify] = useState(false)
    const [name, setName] = useState<string>("")
    const [number, setNumber] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const handleSubmit: FormEventHandler<HTMLFormElement> = async(e) => {
        e.preventDefault()
        const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
        const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
        const data = `
            ${number}
${message}
${name}
        `;
        try {
            const res = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: chatId,
                text: data,
            })
                console.log('Xabar yuborildi:', res.data);
                if (res?.data?.ok) {
                    setNotify(true)
                }
        } catch (error) {
            console.error('Xabar yuborishda xatolik:', error);
        }
    }
    useEffect(() => {
        if (notify) {
            const timer = setTimeout(() => setNotify(false), 5000);
            return () => clearTimeout(timer); 
        }
    }, [notify]);
    const focusNumber = () => {
        setNumber("+998")
    }
    const handleChange = (value: string) => {
        setNumber(value    );

    };
    const contactStyle = {
        fontWeight: 600,
        fontSize: "16px",
        padding: '1.5rem', 
        paddingLeft: "3rem",
        color: '#404B7C',
        width: '100%',
        height: "74px",
    };
  return (
    <section className='w-full flex justify-center px-3 py-[100px]'>
        <div className={`${notify ? "right-3" : "right-[-400px] opacity-0"}  ease-linear duration-300 w-full max-w-[300px] p-4 flex cursor-pointer gap-4 items-center fixed z-[30] top-3 text-white shadow-gray-500 shadow-md bg-green-500`}>
            <span>{t("message.success")}</span>
            <IoCloseSharp size={24} onClick={()=>setNotify(false)}/>
        </div>
        <div className='max-w-[1133px] w-full flex flex-col gap-10 items-center'>
            <h2 className='text-[32px] md:text-[40px] font-[600]'>{t("contact.title")}</h2>
            <div className='flex flex-col-reverse md:flex-row gap-4 justify-between w-full'>
                <div className='grid sm:grid-cols-2 md:flex flex-col gap-5'>
                    {
                        data?.map((item,index)=> {
                            return <div key={index} className={`bg_main p-6 md:max-w-[328px] w-full flex items-center gap-5 lg:gap-7 ${index === 2 ? "sm:col-span-2" : ""}`}>
                                <span className='text_main bg-white p-3 rounded-full'>{item?.icon}</span>
                                <div className='flex flex-col text-white text-[16px] lg:text-[20px] font-[600] gap-[14px]'>
                                    <span>{item?.title}</span>
                                    <a href="" className={index === 0 ? 'whitespace-nowrap' : ""}>{item?.value}</a>
                                </div>
                            </div>
                        })
                    }
                </div>
                <form className='max-w-[714px] w-full flex flex-col items-start gap-5' onSubmit={handleSubmit}>
                    <h3 className='text-[24px] font-[600] text_main'>{t("contact.title1")}</h3>
                    <div className='flex flex-col sm:flex-row gap-[12px] w-full'>
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className='contact font-[600] p-6 rounded-[10px] border text-[#404B7C] border-[#404B7C] sm:max-w-[350px] w-full' placeholder={t("contact.name_placeholder")}/>
                        <div className='contact font-[600] overflow-hidden rounded-[10px] border text-[#404B7C] border-[#404B7C] sm:max-w-[350px] w-full'>
                            <PhoneInput country={'uz'} value={number} onChange={handleChange} inputStyle={contactStyle} placeholder={t("contact.phone_placeholder")}/>
                        </div>
                    </div>
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className='contact font-[600] p-6 rounded-[10px] border text-[#404B7C] border-[#404B7C] w-full resize-none h-[134px]' placeholder={t("contact.message_placeholder")}></textarea>
                    <button type='submit' className='bg-white self-end hover:text-white px-6 py-3 rounded-lg border-2 hover:border-transparent border-[#404B7C] ease-linear duration-200 hover:bg-[#404B7C] bg-transparent text-[#404B7C]'>{t("contact.btn")}</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact

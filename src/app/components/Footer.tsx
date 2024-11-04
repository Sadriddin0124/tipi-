import React from 'react'
import Logo from "@/assets/logo.webp"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
const Footer = () => {
    const t = useTranslations()
    const links1 = [
        {
            label: t("footer.link1"),
            path: "/"
        },
        {
            label: t("footer.link2"),
            path: "/"
        },
        {
            label: t("footer.link3"),
            path: "/"
        },
        {
            label: t("footer.link4"),
            path: "/"
        },
        {
            label: t("footer.link5"),
            path: "/"
        },
        {
            label: t("footer.link6"),
            path: "/"
        },
    ]
    const links2 = [
        {
            label: t("footer.link7"),
            path: "/"
        },
        {
            label: t("footer.link8"),
            path: "/"
        },
        {
            label: t("footer.link9"),
            path: "/"
        },
        {
            label: t("footer.link10"),
            path: "/"
        },
        {
            label: t("footer.link11"),
            path: "/"
        },
    ]
    const social = [
        {
            icon: <FaTelegramPlane />,
            path: "https://t.me/"
        },
        {
            icon: <FaFacebookF />,
            path: "https://facebook.com/"
        },
        {
            icon: <RiInstagramFill />,
            path: "https://instagram.com/"
        },
    ]
  return (
    <footer className='p-[58px] bg_main flex justify-start'>
        <div className='flex justify-between max-w-[1100px] w-full'>
            <div className='flex flex-col items-end'>
                <div className='max-w-[394px] flex gap-4 items-start'>
                    <Image src={Logo} alt='Logo' width={100} height={100}/>
                    <span className='max-w-[280px] font-bold text-white'>{t("footer.logo")}</span>
                </div>
                <div className='max-w-[276px] flex flex-col gap-5 text-white mt-5'>
                    <p className=''>{t("footer.address")}</p>
                    <p className=''>{t("footer.phone")}</p>
                    <p className=''>{t("footer.mail")}</p>
                    <div className='flex w-full justify-between gap-2 max-w-[232px] self-start text-white text-[24px]'>
                        {
                            social?.map((item,index)=> {
                                return <a href={item?.path} key={index}>{item?.icon}</a>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='flex justify-between max-w-[460px] w-full'>
                <div className='text-[20px] font-[400] flex flex-col gap-5 text-white'>
                    {
                        links1?.map((item,index)=> {
                            return <Link href={item?.path} key={index}>{item?.label}</Link>
                        })
                    }
                </div>
                <div className='text-[20px] font-[400] flex flex-col gap-5 text-white'>
                    {
                        links2?.map((item,index)=> {
                            return <Link href={item?.path} key={index}>{item?.label}</Link>
                        })
                    }
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

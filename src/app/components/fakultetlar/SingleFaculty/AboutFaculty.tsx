import { useTranslations } from 'next-intl'
import React from 'react'

const AboutFaculty = () => {
  const t = useTranslations()
  return (
    <section className='flex justify-center px-3 py-4 md:py-[100px]'>
      <div className='max-w-[1300px] w-full flex flex-col gap-10'>
        <h2 className='text-[24px] md:text-[40px] font-[600]'>{t("aboutFaculty.title")}</h2>
        <p className='text-[16px] md:text-[26px]'>{t("aboutFaculty.desc")}</p>
      </div>
    </section>
  )
}

export default AboutFaculty

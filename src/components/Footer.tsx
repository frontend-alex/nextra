'use client'

import React from 'react'

import Link from 'next/link'
import Circle from './ui/circle'

import useTranslation from '@hooks/useTranslation'

import LanguageDropdown from './LanguageDropdown'
import { additionalFooterLinks, NavbarLinks } from '@constants/StaticData'

const Footer = () => {
  const { t } = useTranslation();
  const fLinks = additionalFooterLinks(t)
  const nLinks = NavbarLinks(t)

  return (
    <div  className='flex-col-3 border-t overflow-hidden border-neutral-300 mt-5 dark:border-neutral-800 pt-20 px-5 lg:px-10'>
        <ul className='r-flex-3 items-start justify-between lg:items-center mb-5'>
          {nLinks.map((link, id) => (
            <li className='text-lg' key={id}><Link href={link.path}>{link.name}</Link></li>
          ))}
        </ul>

        <div className='h-[1px] w-full border border-neutral-300 dark:border-neutral-800'></div>

        <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
          <p className='text-neutral-600'>{t('smile')}</p>

          <ul className='r-flex-3 items-start lg:items-center mt-5 z-2'>
           {fLinks.map((link, id) => (
            <li className='text-sm text-neutral-600' key={id}>{link.name}</li>
           ))}
            <LanguageDropdown/>
          </ul>
        </div>

        <h1 className='font-bold text-[10em] lg:text-[25em] leading-[0.8em] z-[-1] relative'>Nextra.
            <Circle className='w-[100px] h-[100px] z-[-1] left-1/2 top-0' show={true}/>
        </h1>
    </div>
  )
}

export default Footer
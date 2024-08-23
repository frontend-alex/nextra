'use client'

import React, { useContext } from 'react';

import Flag from 'react-world-flags';

import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { footerLanguages } from '@constants/StaticData';
import { LanguageContext, LanguageContextInterface } from '@contexts/LanguageContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { toast } from 'react-toastify';
import useTranslation from '@hooks/useTranslation';

const LanguageDropdown = () => {

  const { t } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext) as LanguageContextInterface

  return (
    <DropdownMenu>
    <DropdownMenuTrigger className='w-full relative'>
      <Button variant='outline' className='flex gap-1 items-start justify-start w-full'>
        <Flag className='h-5 w-5' code={language}/>
        <p className='capitalize'>{language}</p>
      </Button>
      <ChevronDown className='absolute right-5 top-[22%] text-stone-400'/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {footerLanguages.map((lang, index) => (
        <DropdownMenuItem disabled={lang.language === language} className='flex-3' key={index} onClick={() => { setLanguage(lang.language); toast.success(t('languageChanged'))}}>
          <Flag className='w-5 h-5' code={lang.language}/>
          <p>{lang.name}</p>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default LanguageDropdown
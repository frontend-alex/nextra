'use client'

import React, { useContext } from 'react';

import Flag from 'react-world-flags';

import { Button } from './ui/button';
import { footerLanguages } from '@constants/StaticData';
import { LanguageContext, LanguageContextInterface } from '@contexts/LanguageContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { ChevronDown } from 'lucide-react';

const LanguageDropdown = () => {

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
        <DropdownMenuItem className='flex-3' key={index} onClick={() => setLanguage(lang.language)}>
          <Flag className='w-5 h-5' code={lang.language}/>
          <p>{lang.name}</p>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default LanguageDropdown
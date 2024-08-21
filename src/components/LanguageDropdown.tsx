'use client'

import React, { useContext } from 'react';

import Flag from 'react-world-flags';

import { Button } from './ui/button';
import { footerLanguages } from '@constants/StaticData';
import { LanguageContext, LanguageContextInterface } from '@contexts/LanguageContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

const LanguageDropdown = () => {

    const { language, setLanguage } = useContext(LanguageContext) as LanguageContextInterface

  return (
    <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant='outline' className='flex-1'>
        <Flag code={language}/>
        <p className='capitalize'>{language}</p>
      </Button>
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
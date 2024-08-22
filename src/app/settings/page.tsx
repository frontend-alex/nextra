'use client'

import React, { useState } from "react";
import DashboardLayout from "@components/layouts/DashboardLayout";
import useTranslation from "@hooks/useTranslation";
import LanguageDropdown from "@components/LanguageDropdown";

import { Button } from "@components/ui/button";
import Circle from "@components/ui/circle";

const Settings = () => {

  const { t } = useTranslation();

  const [ email, setEmail ] = useState('');

  return (
    <DashboardLayout>
      <div className="flex-col-10 relative">
        <Circle show={true} className="w-[100px] h-[100px] top-10 z-[-10] left-1/3"/>
        <div className="flex-col-5">
          <div className="grid-2 gap-y-5">
            <div className="flex-col-3">
              <label>{t("email")}</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("email") || ""} className="input w-full" />
              {email.length !== 0 &&  <Button className="mt-2 w-max">{t('updateEmail')}</Button>  }
            </div>
            <div/>
            <div className="flex-col-3">
              <label>{t('password')}</label>
              <Button className="w-full lg:w-max">{t('changePassword')}</Button>
            </div>
            <div/>
            <div className="flex-col-3">
              <label>{t('language')}</label>
              <div className="w-full">
                <LanguageDropdown/>
              </div>
            </div>
            <div/>
            <div className="flex-col-3">
              <div className="flex-col-1">
                <h1>{t('removeAccount')}</h1>
                <p>{t('removeAccountText')}</p>
              </div>
              <div className="r-flex-3">
              <Button variant='destructive' className="w-full lg:w-max">{t('disableAccount')}</Button>
              <Button variant='outline' className="w-full lg:w-max text-red-600/50 hover:text-red-600">{t('deleteAccount')}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

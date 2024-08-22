'use client'

import React from "react";
import DashboardLayout from "@components/layouts/DashboardLayout";
import useTranslation from "@hooks/useTranslation";
import LanguageDropdown from "@components/LanguageDropdown";

import { Button } from "@components/ui/button";

const Settings = () => {

  const { t } = useTranslation();

  return (
    <DashboardLayout>
      <div className="flex-col-10">
        <div className="flex-col-5">
          <div className="grid-2 gap-y-5">
            <div className="flex-col-3">
              <label>{t("email")}</label>
              <input placeholder={t("email") || ""} className="input w-full" />
            </div>
            <div/>
            <div className="flex-col-3">
              <label>{t('password')}</label>
              <Button className="w-max">{t('changePassword')}</Button>
            </div>
            <div/>
            <div className="flex-col-3">
              <label>{t('language')}</label>
              <div className="w-full">
                <LanguageDropdown/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

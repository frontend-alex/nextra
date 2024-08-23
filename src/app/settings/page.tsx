"use client";

import React, { useState } from "react";
import Circle from "@components/ui/circle";
import useTranslation from "@hooks/useTranslation";
import LanguageDropdown from "@components/LanguageDropdown";
import DashboardLayout from "@components/layouts/DashboardLayout";

import { toast } from "react-toastify";
import { useTheme } from "next-themes";
import { Button } from "@components/ui/button";
import { Moon, PcCase, ShieldMinus, SquarePen, Sun, Trash } from "lucide-react";
import { Dialog } from "@components/ui/dialog";
import AccountModals from "@components/ui/modals/AccountModals";

const Settings = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { DisableAccountModal, DeleteAccountModal } = AccountModals();

  const [email, setEmail] = useState("");

  return (
    <DashboardLayout>
      <div className="flex-col-10 relative">
        <Circle
          show={true}
          className="w-[100px] h-[100px] top-10 z-[-10] left-1/3"
        />
        <div className="flex-col-5">
          <div className="grid-2 gap-y-5">
            {/* email */}
            <div className="flex-col-3">
              <label>{t("email")}</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("email") || ""}
                className="input w-full"
              />
              {email.length !== 0 && (
                <Button className="mt-2 w-max">{t("updateEmail")}</Button>
              )}
            </div>
            <div />
            {/* email */}

            {/* password */}
            <div className="flex-col-3">
              <label>{t("password")}</label>
              <Button
                variant={theme === "light" ? "default" : "outline"}
                className="shadcn-icon-button"
              >
                <SquarePen size={15} />
                {t("changePassword")}
              </Button>
            </div>
            <div />
            {/* password */}

            {/* language */}
            <div className="flex-col-3">
              <label>{t("language")}</label>
              <div className="w-full">
                <LanguageDropdown />
              </div>
            </div>
            <div />
            {/* language */}

            {/* theme */}
            <div className="flex-col-3">
              <label className="flex-1">
                {t("theme")}
                <p className="text-[10px] text-stone-400">
                  ({theme === "system" ? t("system") : t(theme)})
                </p>
              </label>
              <div className="r-flex-3">
                <Button
                  disabled={theme === "system"}
                  variant={theme === "light" ? "default" : "outline"}
                  onClick={() => {
                    setTheme("system");
                    toast.success(t("themeChanged"));
                  }}
                  className="shadcn-icon-button"
                >
                  <PcCase size={15} />
                  {t("system")}
                </Button>
                <Button
                  disabled={theme === "dark"}
                  variant={theme === "light" ? "default" : "outline"}
                  onClick={() => {
                    setTheme("dark");
                    toast.success(t("themeChanged"));
                  }}
                  className="shadcn-icon-button"
                >
                  <Moon size={15} />
                  {t("dark")}
                </Button>
                <Button
                  disabled={theme === "light"}
                  variant="outline"
                  onClick={() => {
                    setTheme("light");
                    toast.success(t("themeChanged"));
                  }}
                  className="shadcn-icon-button"
                >
                  <Sun size={15} />
                  {t("light")}
                </Button>
              </div>
            </div>
            <div />
            {/* theme */}

            {/* deactivate account */}
            <div className="flex-col-3">
              <div className="flex-col-1">
                <h1>{t("removeAccount")}</h1>
                <p>{t("removeAccountText")}</p>
              </div>
              <div className="r-flex-3">
                <DisableAccountModal />
                <DeleteAccountModal />
              </div>
            </div>
            <div />
            {/* deactivate account */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

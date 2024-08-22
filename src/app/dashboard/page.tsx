'use client'

import React from "react";
import Link from 'next/link'

import useTranslation from "@hooks/useTranslation";
import DashboardLayout from "@components/layouts/DashboardLayout";
import DatePickerButton from "@components/ui/date-picker-button";

import { Filter } from "lucide-react";
import { Button } from "@components/ui/button";
import { BarChartOne } from "@components/ui/charts/bar-chart-one";
import { WaveChartOne } from "@components/ui/charts/wave-charts-one";
import { CircleChartOne } from "@components/ui/charts/circle-chart-one";

const Dashboard = () => {

    const { t } = useTranslation();

  return (
    <DashboardLayout>
        <div className="flex-col-10">
            <div className="flex-col-5">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-0">
                    <h1 className="font-bold text-2xl lg:text-4xl">{t('revenue')} <br/> <span className="font-bold text-2xl lg:text-4xl gradient-text">$90,239.00</span></h1>
                    <div className="r-flex-3">
                        <DatePickerButton/>
                        <Button className="flex-2 text-stone-400 w-full lg:w-max" variant="outline"><Filter size={15}/>{t('filters')}</Button>
                    </div>
                </div>
                <div className="grid-3 gap-5">
                    <BarChartOne/>
                    <WaveChartOne/>
                    <CircleChartOne/>
                </div>
            </div>
            <div className="flex-col-5">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0">
                    <h1 className="text-lg font-bold lg:text-2xl">Recent Campaigns</h1>
                    <Link href="#" className="underline text-sm text-stone-400">View All</Link>
                </div>
                <div className="grid-3 gap-5">
                    <div className="flex-2"><h1>{t('draft')}</h1><div className="bg-neutral-100 dark:bg-neutral-800 p-[2px] px-[7px] rounded-sm">2</div></div>
                    <div className="flex-2"><h1>{t('inProgress')}</h1><div className="bg-neutral-100 dark:bg-neutral-800 p-[2px] px-[7px] rounded-sm">3</div></div>
                    <div className="flex-2"><h1>{t('archived')}</h1><div className="bg-neutral-100 dark:bg-neutral-800 p-[2px] px-[7px] rounded-sm">0</div></div>
                </div>

                {/* https://dribbble.com/shots/22090352-Campaigns-Dashboard */}

                <div className="grid-3 gap-5">
                    {[1,2,3,4,5,6,7,8,9].map((_, index) => (
                        <div key={index} className="h-[200px] bg-neutral-100 dark:bg-neutral-900 rounded-md">
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </DashboardLayout>
  );
};

export default Dashboard;

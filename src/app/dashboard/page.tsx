import React from "react";
import DashboardLayout from "@components/layouts/DashboardLayout";
import DatePickerButton from "@components/ui/date-picker-button";
import { Filter } from "lucide-react";
import { Button } from "@components/ui/button";
import { BarChartOne } from "@components/ui/charts/bar-chart-one";
import { WaveChartOne } from "@components/ui/charts/wave-charts-one";
import { CircleChartOne } from "@components/ui/charts/circle-chart-one";

const Dashboard = () => {
  return (
    <DashboardLayout>
        <div className="flex-col-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-0">
                <h1 className="font-bold text-2xl lg:text-4xl">Your total revenue <br/> <span className="font-bold text-2xl lg:text-4xl gradient-text">$90,239.00</span></h1>
                <div className="flex-3">
                    <DatePickerButton/>
                    <Button className="flex-2 text-stone-400" variant="outline"><Filter size={15}/>Filters</Button>
                </div>
            </div>
            <div className="grid-3 gap-5">
                <BarChartOne/>
                <WaveChartOne/>
                <CircleChartOne/>
            </div>
        </div>
    </DashboardLayout>
  );
};

export default Dashboard;

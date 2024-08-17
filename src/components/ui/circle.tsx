import React from "react"
import { cn } from "@lib/utils";

interface Circle { 
    className?: string, 
    show: boolean 
}

const Circle = ({className, show} : Circle) => {
  return (
    <div className={cn(className, `flex ${show ? '' :'dark:hidden'} blur-xl bg-mainColor rounded-full absolute`)}/>
  )
}

export default Circle
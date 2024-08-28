import { cn } from "@lib/utils"

interface Circle { 
    className?: string, 
    show: boolean 
}

const Circle = ({className, show} : Circle) => {
  return (
    <div className={cn(`flex ${show ? '' : 'dark:hidden' } blur-xl bg-mainColor rounded-full absolute`, className)}/>
  )
}

export default Circle
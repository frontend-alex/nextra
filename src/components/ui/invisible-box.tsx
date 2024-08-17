import { cn } from "@lib/utils"

interface InvinsibleBox {
    className?: string
}

const InvisibleBox = ({ className }: InvinsibleBox) => {
  return (
    <div className={cn(className, 'bg-transparent')}/>
  )
}

export default InvisibleBox
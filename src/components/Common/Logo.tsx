import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const Logo = ({ className }: { className?: string}) => {
  return (
    <Image
        src={"/karse.png"}
        width={289}
        height={259}
        alt='karse-logo'
        className={cn("w-12 h-12",className)}
    />
  )
}

export default Logo

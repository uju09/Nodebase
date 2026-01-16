import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-muted flex min-h-svh flex-col justify-center items-center gap-6 p-6 md:p-10'>
      <div className='flex flex-col w-full gap-6 max-w-sm'>
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          Nodebase
        </Link>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
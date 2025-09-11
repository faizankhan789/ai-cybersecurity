'use client'

import { useEffect, useState } from 'react'

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    document.documentElement.classList.add('hydrated')
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}
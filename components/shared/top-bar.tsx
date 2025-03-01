import { cn } from '@/lib/utils'
import React from 'react'
import { Container } from './container'
import { Categories } from './categories'
import { SortPopup } from './sort-popup'

interface Props {
  className?: string
}

export const TopBar: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        'sticky bg-white top-0 gb-white py-5 shadow-lg shadow-black/5 z-10',
        className
      )}
    >
      <Container className='flex items-center justify-between'>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}

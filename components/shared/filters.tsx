import { cn } from '@/lib/utils'
import React from 'react'
import { Title } from './title'
import { FilterCheckbox } from './filter-checkbox'
import { Input, RangeSlider } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
  className?: string
}

export const Filters: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => (
  <div className={cn('', className)}>
    <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

    {/* checkboxes */}
    <div className='flex flex-col gap-4'>
      <FilterCheckbox text='Можно собирать' value='1' />
      <FilterCheckbox text='Новинки' value='2' />
    </div>

    {/* prices */}
    <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
      <p className='font-bold mb-3'>Цена от и до:</p>
      <div className='flex gap-3 mb-5'>
        <Input
          type='number'
          placeholder='0'
          min={0}
          max={1000}
          defaultValue={0}
        />
        <Input type='number' placeholder='1 000' min={100} max={1000} />
      </div>
      <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
    </div>

    {/* ingredients */}
    <CheckboxFiltersGroup
      title='Ингридиенты'
      limit={6}
      className='mt-5'
      defaultItems={[
        {
          value: '1',
          text: 'Мясо',
        },
        {
          value: '2',
          text: 'Сыр',
        },
        {
          value: '3',
          text: 'Помидор',
        },
      ]}
      items={[
        {
          value: '1',
          text: 'Мясо',
        },
        {
          value: '2',
          text: 'Сыр',
        },
        {
          value: '3',
          text: 'Помидор',
        },
      ]}
    />
  </div>
)

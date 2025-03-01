import { cn } from '@/lib/utils'
import React from 'react'
import { Title } from './title'
import { FilterCheckbox } from './filter-checkbox'
import { Input, RangeSlider } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
  className?: string
}

const defaultIngredients = [
  {
    value: '1',
    text: 'Сырный соус',
  },
  {
    value: '2',
    text: 'Моцаррелла',
  },
  {
    value: '3',
    text: 'Чесночный соус',
  },
  {
    value: '4',
    text: 'Соленные огурчики',
  },
  {
    value: '5',
    text: 'Томаты',
  },
  {
    value: '6',
    text: 'Красный лук',
  },
  {
    value: '7',
    text: 'Чеснок',
  },
  {
    value: '8',
    text: 'Чесночный соус',
  },
  {
    value: '9',
    text: 'Соленные огурчики',
  },
  {
    value: '10',
    text: 'Томаты',
  },
  {
    value: '11',
    text: 'Красный лук',
  },
]

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
      className='mt-5'
      limit={6}
      defaultItems={defaultIngredients}
      items={defaultIngredients}
    />
  </div>
)

import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/* filters */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* content */}
          <div className='flex flex-col gap-16'>
            <ProductsGroupList
              id='pizzas'
              title='Пиццы'
              items={[
                {
                  id: 1,
                  name: 'Пицца',
                  price: 550,
                  items: [{ price: 550 }],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif',
                },
                {
                  id: 2,
                  name: 'Пицца',
                  price: 550,
                  items: [{ price: 550 }],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif',
                },
                {
                  id: 3,
                  name: 'Пицца',
                  price: 550,
                  items: [{ price: 550 }],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif',
                },
                {
                  id: 4,
                  name: 'Пицца',
                  price: 550,
                  items: [{ price: 550 }],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif',
                },
              ]}
              categoryId={1}
            />

            <ProductsGroupList
              id='combo'
              title='Комбо'
              items={[
                {
                  id: 1,
                  name: 'Пицца',
                  price: 550,
                  items: [{ price: 550 }],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif',
                },
                {
                  id: 2,
                  name: 'Пицца',
                  price: 550,
                  items: [{ price: 550 }],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif',
                },
                {
                  id: 3,
                  name: 'Пицца',
                  price: 550,
                  items: [{ price: 550 }],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif',
                },
                {
                  id: 4,
                  name: 'Пицца',
                  price: 550,
                  items: [{ price: 550 }],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif',
                },
              ]}
              categoryId={2}
            />
          </div>
        </div>
      </Container>
    </>
  )
}

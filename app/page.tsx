import { Container, Filters, Title, TopBar } from '@/components/shared'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[60px]'>
          {/* filters */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* content */}
          <div className='flex flex-col gap-16'>List of pizzas</div>
        </div>
      </Container>
    </>
  )
}

import {
  Categories,
  Container,
  SortPopup,
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
      <div className='h-[4000px]'></div>
    </>
  )
}

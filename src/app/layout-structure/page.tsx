import Container from '@/components/Layout/Container'
import Main from '@/components/Layout/Main'

export default function page() {
  return (
    <Main className="p-0">
      <section className="border-b-2 border-black bg-white py-10">
        <Container className="flex items-center justify-center bg-red-800 text-white">
          <div className="h-[500px] w-1/2 bg-black"></div>
        </Container>
      </section>
      <section className="border-b-2 border-black bg-white py-10">
        <Container className="flex items-center justify-center bg-red-800 text-white">
          <div className="h-[500px] w-1/2 bg-black"></div>
          <div className="h-[500px] w-1/2 bg-orange-400"></div>
        </Container>
      </section>
      <section className="border-b-2 border-black bg-white py-10">
        <Container className="flex items-center justify-center bg-red-800 text-white">
          <div className="h-[500px] flex-1 bg-black"></div>
          <div className="h-[500px] flex-1 bg-orange-400"></div>
          <div className="h-[500px] flex-1 bg-black"></div>
        </Container>
      </section>
    </Main>
  )
}

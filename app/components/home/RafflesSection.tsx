import RafflesContainer from './RafflesContainer'

export function RafflesSection() {
  return (
    <section>
      <h2 className="text-center text-3xl">Estas son las raffles disponibles</h2>
      <div className='p-4'>
        <RafflesContainer />
      </div>
    </section>
  )
}
import StepCard from "./StepCard"

export default function Steps() {
  return (
    <div className="p-6 flex gap-3 px-30">
      <StepCard
        title="Paso 1: Conecta tu wallet"
        description="Conecta tu wallet para poder acceder a ver cuales son las raffles disponibles."
      />
      <StepCard
        title="Paso 2: Participa en raffles"
        description="Anotate en las raffles para tener una posibilidad de ganarlas."
      />
      <StepCard
        title="Paso 3: Esperar el cierre"
        description="Ya no tenes que hacer nada mas! Simplemente esperar a que la raffle termine"
      />
      <StepCard
        title="Paso 4: Reclamar tu voucher"
        description="Si tu wallet es la ganadora, probando la firma ya vas a poder acceder al voucher"
      />
    </div>
  )
}
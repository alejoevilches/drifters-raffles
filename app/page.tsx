import Steps from "./components/layout/home/Steps";
import TechnicalExplanation from "./components/layout/home/TechnicalExplanation";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center flex-col text-4xl bg-white text-gray-900">
      <h1>Ahora podes participar de nuestras Raffles a traves de la tecnología Blockchain</h1>
      <p className="text-center text-lg">Drifters da un paso adelante en la forma en la que se trabaja sus ya famosas Raffles y
        ahora permite un sistema mucho mas seguro y transparente. Bienvenidos a las Raffles via Blockchain de Drifters.
      </p>
      <h2 className="text-center text-3xl">Como funciona?</h2>
      <Steps />
      <section className="bg-gray-900 text-white px-30 py-10 transform -skew-y-3 my-6">
        <div className="transform skew-y-3">
          <h2 className="text-center text-3xl">Como se elige al ganador?</h2>
          <TechnicalExplanation />
        </div>
      </section>
      <h2 className="text-center text-3xl">Conecta tu wallet para poder ver las raffles disponibles</h2>

    </div >
  );
}

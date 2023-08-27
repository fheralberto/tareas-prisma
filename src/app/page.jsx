import { prisma } from "@/libs/prisma.js";
import TarjetaTarea from "@/components/TarjetaTarea";

const cargarTareas = async () => {
  // Obtienedatos desde la api
  // const res = await fetch("http://localhost:3000/api/tareas");
  // const data = await res.json();

  // Obteniene datos directo de la base de datos
  const data = await prisma.tarea.findMany();

  return data;
};

export const dynamic = "force dynamic"

async function Home() {
  const tareas = await cargarTareas();
  return (
    <main className="centrar flex-col p-4">
      <h1 className="text-2xl mb-4">Tareas</h1>
      <div className="grid gap-4 grid-cols-2">
        {tareas.map((tarea) => (
          <div key={tarea.id}>
            <TarjetaTarea tarea={tarea} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;

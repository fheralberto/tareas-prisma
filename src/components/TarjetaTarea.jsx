"use client";
import { useRouter } from "next/navigation";

const TarjetaTarea = ({ tarea }) => {
  const router = useRouter();
  return (
    <section
      className="bg-slate-800 hover:bg-slate-700 hover:cursor-pointer px-4 py-2 flex flex-col justify-between gap-2 rounded-md"
      onClick={() => {
        router.push(`/editar/${tarea.id}`);
      }}
    >
      <h2 className="text-xl font-medium">{tarea.titulo}</h2>
      <p className="text-lg font-thin">{tarea.descripcion}</p>
      <p className="text-sm font-light">
        {new Date(tarea.createdAt).toLocaleDateString()}
      </p>
    </section>
  );
};

export default TarjetaTarea;

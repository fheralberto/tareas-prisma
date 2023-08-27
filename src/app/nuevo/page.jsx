"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Nuevo = ({ params }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tareas/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Editando...");
          setTitulo(data.tarea.titulo);
          setDescripcion(data.tarea.descripcion);
        });
    }
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = params.id ? "PUT" : "POST";
    const ruta = params.id ? `/${params.id}` : "";

    const res = await fetch(`/api/tareas${ruta}`, {
      method,
      body: JSON.stringify({ titulo, descripcion }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
    router.push("/");
  };
  return (
    <main>
      <h1 className="centrar text-xl py-4">
        {params.id ? "Editar tarea" : "Nueva tarea"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 px-10 py-5 w-full max-w-screen-md m-auto"
      >
        <label htmlFor="titulo">Título de la tarea</label>
        <input
          type="text"
          name="titulo"
          id="titulo"
          placeholder="Título"
          className="border border-gray-400 mb-2 w-full px-4 py-2 text-black"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <label htmlFor="descripción">Descripción</label>
        <textarea
          name="descripcion"
          id="descripcion"
          placeholder="Descripción de la tarea"
          rows="3"
          className="w-full border-gray-400 px-4 py-2 mb-2 text-black"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 font-bold px-4 py-2 rounded-md"
          >
            {params.id ? "Editar" : "Crear"}
          </button>
          {params.id && (
            <button
              className="bg-red-500 hover:bg-red-700 font-bold px-4 py-2 rounded-md"
              type="button"
              onClick={async () => {
                const res = await fetch(`/api/tareas/${params.id}`, {
                  method: "DELETE",
                });
                const data = await res.json();
                console.log(data);
                router.refresh();
                router.push("/");
              }}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </main>
  );
};

export default Nuevo;

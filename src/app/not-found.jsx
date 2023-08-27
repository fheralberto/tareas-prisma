"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <main className="centrar flex-col p-4">
      <h1 className="text-2xl font-bold py-3">Página no encontrada</h1>
      <button className="bg-sky-500 px-4 py-2 rounded-md"
        onClick={() => {
          router.back();
        }}
      >
        Regresar
      </button>
    </main>
  );
};

export default NotFound;

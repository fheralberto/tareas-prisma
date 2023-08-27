import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const tareas = await prisma.tarea.findMany();
  console.log(tareas);

  return NextResponse.json({ tareas });
}

export async function POST(request) {
  const { titulo, descripcion } = await request.json();
  const nuevaTarea = await prisma.tarea.create({
    data: { titulo, descripcion },
  });

  return NextResponse.json({nuevaTarea});
}

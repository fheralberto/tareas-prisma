import { prisma } from "@/libs/prisma.js";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const tarea = await prisma.tarea.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json({ tarea });
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const tareaActualizada = await prisma.tarea.update({
    where: {
      id: Number(params.id),
    },
    data,
  });

  return NextResponse.json({ tareaActualizada, id: params.id });
}

export async function DELETE(request, { params }) {
  try {
    const tarea = await prisma.tarea.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({ tareaEliminada: tarea });
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

import { NextResponse } from 'next/server'

import prisma from '../../../../lib/prisma'

// GET /api/pets
export async function GET() {
  // findMany returns a list of records.
  const pets = await prisma.pet.findMany({
    // sort by id ascending
    orderBy: { id: 'asc' },
    // select only id, name, imageUrl, and owner.name
    select: { id: true, name: true, imageUrl: true, owner: { select: { name: true } } },
  })
  // return Response with pets to json
  return NextResponse.json({ pets })
}

// POST /api/pets
export async function POST(request: Request) {
    // get data from request body
    const data = await request.json()
    // create pet record
    const pet = await prisma.pet.create({
      // data from request body
      data: data.pet,
    })
    // return Response with pet to json
    return NextResponse.json({ pet })
  }

  // PUT /api/pets
export async function PUT(request: Request) {
    // get data from request body
    const data = await request.json()
    // update pet record
    const pets = await prisma.pet.updateMany({
      // where gender is Male
      where: { gender: 'Male' },
      // data from request body
      data: data.pet,
    })
    // return Response with pet to json
    return NextResponse.json({ pets })
  }
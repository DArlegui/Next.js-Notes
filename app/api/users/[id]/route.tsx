import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/prisma/client';
//URL: http://localhost:3000/api/users/#

//GET for getting a list of objects
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({ where: { id: parseInt(params.id) } });
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
  return NextResponse.json(user);
}

//PUT for replacing an object
//PATCH for updating an object
export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });
  if (params.id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name });
}

//DELETE for deleting an object
export function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
  //Fetch user from db
  //If not found, return 404
  //Delete the user
  //Return 200
  if (params.id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 });
  return NextResponse.json({});
}

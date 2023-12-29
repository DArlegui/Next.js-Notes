import next from 'next';
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest, { params }: { params: { id: number } }) {
  //Fetch data from a db
  //If not found, return 404 error
  //Else return data
  if (params.id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 });
  return NextResponse.json({ id: 1, name: 'Daniel' });
}

//URL: http://localhost:3000/api/users/11

//PUT for replacing an object
//PATCH for updating an object
export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  //Validate the request body
  //If invalid, return 400 error
  //Fetch the user with the given id
  //If doesn't exist, return 404 error
  //Else update the user
  //Return the updated user

  const body = await request.json();
  if (!body.name) return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  if (params.id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name });
}

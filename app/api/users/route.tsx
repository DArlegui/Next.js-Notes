import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'Daniel' },
    { id: 2, name: 'Uto' },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  //Validation
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

//Use Postman for testing

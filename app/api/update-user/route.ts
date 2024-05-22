import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const { id, name, email, age } = await request.json();

  try {
    if (!id || !name || !email || !age)
      throw new Error("ID, name, email, and age are required");

    // Perform the update operation using the provided ID
    await sql`
      UPDATE users 
      SET name = ${name}, 
          email = ${email},
          age = ${age} 
      WHERE id = ${id};
    `;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  try {
    const users = await sql`SELECT * FROM users;`;

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

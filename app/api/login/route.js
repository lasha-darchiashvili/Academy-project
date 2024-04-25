import { cookies } from "next/headers";

export async function POST(request, res) {
  const { username, password } = await request.json();
  console.log(username, password);

  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30,
      }),
    });
    const user = await response.json();

    const cookieStore = cookies();
    cookieStore.set("token", user.token);
    console.log(cookieStore, "route");
    return new Response("login succesful", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("login unsuccesful", { status: 500 });
  }
}

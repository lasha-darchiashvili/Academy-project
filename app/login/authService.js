import { cookies } from "next/headers";

export async function login(username, password) {
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

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const user = await response.json();
    const cookieStore = cookies();
    cookieStore.set("token", user.token);

    return user;
  } catch (error) {
    throw new Error("Login failed");
  }
}

import { cookies } from "next/headers";
export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(
    "https://fumecoffeebackend-production.up.railway.app/team/get",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("❌ Failed to fetch team members:", res.status, await res.text());
    return new Response(JSON.stringify([]), { status: res.status });
  }

  const data = await res.json();
  const members = Array.isArray(data) ? data : data.data || [];
  return Response.json(members);
}

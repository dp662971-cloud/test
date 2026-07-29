export const config = { matcher: "/:path*" };

export default function middleware(request) {
  const auth = request.headers.get("authorization");
  const user = process.env.DASHBOARD_USER || "admin";
  const pass = process.env.DASHBOARD_PASS;

  if (pass && auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const [u, p] = decoded.split(":");
      if (u === user && p === pass) {
        return;
      }
    }
  }

  if (!pass) {
    // No password configured yet — allow through but this means the
    // dashboard is publicly accessible. Set DASHBOARD_PASS in Vercel env vars.
    return;
  }

  return new Response("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Lead Dashboard"' },
  });
}

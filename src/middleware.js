import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Check if the user is trying to access the dashboard
  if (pathname.startsWith("/dashboard")) {
    const token = req.cookies.get("authToken")?.value;

    if (!token) {
      // Redirect to login if no token exists
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      // Verify the token using jose
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);

      // Log the decoded token to check its contents
      console.log("Decoded Token:", payload);

      // Check if the user is an admin (optional)
      if (pathname.startsWith("/dashboard") && !payload.isAdmin) {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }

      // Attach the user data to the request (if needed)
      req.nextauth = { user: payload };
    } catch (error) {
      console.error("JWT verification error:", error);

      // Redirect to login on invalid token
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Allow all other routes
  return NextResponse.next();
}

// Define the paths where this middleware applies
export const config = {
  matcher: ["/dashboard/:path*"], // Matches `/dashboard` and its subpaths
};

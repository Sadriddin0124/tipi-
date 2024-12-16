// import { NextRequest, NextResponse } from 'next/server';
// import createMiddleware from 'next-intl/middleware';

// export default function middleware(request: NextRequest) {
//   // Extract the locale from the path (e.g., /en, /ru, or /uz)
//   const { pathname } = request.nextUrl;
//   const locale = pathname.split('/')[1]; // Get the first part of the URL (e.g., en, ru, uz)

//   // Check if the locale is valid
//   const validLocales = ['en', 'ru', 'uz'];
//   if (!validLocales.includes(locale)) {
//     return NextResponse.redirect(new URL('/uz', request.url)); // Default to 'uz' if invalid locale
//   }

//   // Call next-intl middleware to handle internationalization
//   return createMiddleware({
//     locales: validLocales,
//     defaultLocale: 'uz',
//   })(request);
// }

// export const config = {
//   matcher: ['/en/:path*', '/ru/:path*', '/uz/:path*', '/'],
// };
import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname.split('/')[1]; // Get the first part of the URL (e.g., en, ru, uz)

  // List of valid locales
  const validLocales = ['en', 'ru', 'uz'];

  // Check if the locale is valid
  if (!validLocales.includes(locale)) {
    return NextResponse.redirect(new URL('/uz', request.url)); // Default to 'uz' if invalid locale
  }

  const response = createMiddleware({
    locales: validLocales,
    defaultLocale: 'uz',
  })(request);

  const headers = new Headers(response.headers);
  headers.delete('set-cookie'); // Remove any set-cookie headers that might set the `NEXT_LOCALE` cookie

  return new NextResponse(response.body, {
    status: response.status,
    headers: headers,
  });
}

export const config = {
  matcher: ['/en/:path*', '/ru/:path*', '/uz/:path*', '/'],
};

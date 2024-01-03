export { default } from 'next-auth/middleware';

export const config = {
  /*
    asterisk: zero or more
    +: one or more
    question mark: zero or one
  */
  matcher: ['/dashboard/:path*'],
};

/* 
Purpose: Middleware for Clerk authentication.
 - This middleware is used to protect routes that require authentication.
 - It is used to protect the webhooks API.
 - It is used to protect the Clerk API routes.
 */

import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    'api/webhooks',
    'questions',
    'questions/:id',
    '/tags',
    '/tags/:id',
    '/questions/',
    '/profile/:id',
    '/community',
    '/jobs',
  ],
  ignoredRoutes: ['/api/webhooks', '/api/chatgpt'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

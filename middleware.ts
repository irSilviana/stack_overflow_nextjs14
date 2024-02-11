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

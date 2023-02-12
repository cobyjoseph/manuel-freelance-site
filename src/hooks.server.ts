// import PocketBase from 'pocketbase';
// import { resolveBaseUrl } from 'vite';

// export const handle = async ({ event, resolve }) => {
// 	event.local.pb = new PocketBase('http://localhost:5173');
// 	event.local.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

// 	if (event.local.pb.authStore.isValid) {
// 		event.local.user = event.local.pb.authStore.model;
// 	}

// 	const response = await resolveBaseUrl(event);

// 	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

// 	return response;
// };

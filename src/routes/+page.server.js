import PocketBase from 'pocketbase';
// import type { Actions } from './$types';
import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils/utils';

const pb = new PocketBase('http://127.0.0.1:8090');

// console.log('test');

export const load = ({ locals, params }) => {
	const getBlog = async (blogId) => {
		const blog = serializeNonPOJOs(await pb.collection('blogs').getFullList());

		return blog;
	};
	return {
		blogs: getBlog(params.blogId)
	};
};

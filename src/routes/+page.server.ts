import { serializeNonPOJOs } from '$lib/components/utils/utils';

export const load = ({ locals, params }) => {
	const getProject = async (projectId) => {
		try {
			const blog = serializeNonPOJOs(
				await locals.pb.collection('blogs').getFullList(200, { sort: '-created' })
			);
			return project;
		} catch (err) {
			console.log('Error: ');
		}
	};

	return {
		blogs: getBlogs(params.blogId)
	};
};

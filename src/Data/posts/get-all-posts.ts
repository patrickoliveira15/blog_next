import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = await fetchJson<PostData[]>(process.env.POSTS_URL);
  return posts;
};

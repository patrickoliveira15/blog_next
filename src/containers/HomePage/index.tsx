import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

export type HomeProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomeProps) {
  return (
    <Container>
      {posts.map((post) => (
        <h2 key={post.slug}>{post.title}</h2>
      ))}
    </Container>
  );
}

import { postRepository } from "@/repositories/post";
import { PostImageCover } from "../PostImageCover";
import { PostHeading } from "../PostHeading";

export async function PostList() {

  const posts = await postRepository.findAll();

  return (

    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {posts.map(post => {
        return <div className="flex flex-col gap-4 group" key={post.id}>

          <PostImageCover src={post.coverImageUrl} href={post.slug} alt={post.title}/>

          <div className="flex flex-col gap-4 justify-center">

            <time className="text-slate-600 block text-sm/tight" dateTime={post.createdAt}>
              {post.createdAt}
            </time>

            <PostHeading as="h1" url={post.slug}>
              {post.title}
            </PostHeading>

            <p>
              {post.excerpt}
            </p>

          </div>

        </div>

      })}

    </div>
  );
}
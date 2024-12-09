import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;

  // Fetch data based on postId
  // For example, you can use fetch or any data fetching library

  return (
    <div>
      <h1>Post ID: {postId}</h1>
      {/* Render your post content here */}
    </div>
  );
};

export default Post;

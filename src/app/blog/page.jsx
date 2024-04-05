import SinglePostPage from "./[slug]/page";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div>
      <div>BlogPage</div>s
      <Link href="/route/[slug]?slug=1">link</Link>
      {"SinglePostPage"}
    </div>
  );
};
export default BlogPage;

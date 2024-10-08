import { useRouter } from "next/router";
function BlogPostPage(){
    const Router=useRouter();
    console.log(Router.query)
    return <div>
        <h1>The Blog posts</h1>
    </div>
}

export default BlogPostPage;
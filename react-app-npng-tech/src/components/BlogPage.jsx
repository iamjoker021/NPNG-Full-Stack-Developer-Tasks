import { useLocation } from "react-router-dom";

const BlogPage = () => {
    const location = useLocation();
    const blog = location.state;
    const decodedHTML = decodeURIComponent(blog.content);

    return (
        <div className="blog-page scroll-margin" id="blog-title" >
            <h2 className="text-center">{ blog.title }</h2>
            <div dangerouslySetInnerHTML={{ __html: decodedHTML }}></div>
        </div>
    )
}

export default BlogPage;
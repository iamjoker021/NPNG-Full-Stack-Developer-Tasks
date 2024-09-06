import Main from "./components/Main"
import BlogPage from "./components/BlogPage";
import App from "./App";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: '/blog/:id',
                element: <BlogPage />
            }
        ]
    }
]

export default routes;
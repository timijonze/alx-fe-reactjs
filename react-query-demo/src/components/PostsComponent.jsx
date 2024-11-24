import React from "react";
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};

const PostsComponent = () => {
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        cacheTime: 600000,
        staleTime: 10000,
        refetchOnWindowFocus: true,
        keepPreviousData: true,
    });

    if (isLoading) {
      return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }

    return(
        <div>
            <h1>Posts</h1>
            <button onClick={() => refetch()}>Refetch Posts</button>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
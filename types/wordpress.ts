export interface Post {
    id: string;
    title: string;
    content: string;
    date: string;
    slug: string;
}

export interface PostNode {
    nodes: Post[];
}

export interface PostsData {
    posts: PostNode;
}

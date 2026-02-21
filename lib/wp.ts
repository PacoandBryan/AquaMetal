import { Post } from "@/types/wordpress";

const API_URL = "https://aqua-metal.com/graphql";

export async function fetchGraphQL(query: string, variables = {}) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error("Failed to fetch API");
    }
    return json.data;
}

export async function getAllPosts(): Promise<Post[]> {
    const data = await fetchGraphQL(`
    query AllPosts {
      posts {
        nodes {
          id
          title
          content
          date
          slug
        }
      }
    }
  `);
    return data.posts.nodes;
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const data = await fetchGraphQL(`
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        id
        title
        content
        date
        slug
      }
    }
  `, {
        id: slug,
        idType: "SLUG"
    });
    return data.post;
}

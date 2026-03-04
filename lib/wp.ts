import https from "https";
import { Post } from "@/types/wordpress";

const API_IP = "192.0.78.12";
const HOST_HEADER = "aqua-metal.com";

export async function fetchGraphQL(query: string, variables = {}) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ query, variables });

    const options = {
      hostname: API_IP,
      port: 443,
      path: "/graphql",
      method: "POST",
      rejectUnauthorized: false,
      headers: {
        "Content-Type": "application/json",
        "Host": HOST_HEADER,
        "Content-Length": Buffer.byteLength(body)
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => data += chunk);
      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          if (json.errors) {
            console.error(json.errors);
            reject(new Error("Failed to fetch API"));
          } else {
            resolve(json.data);
          }
        } catch (e) {
          reject(new Error("Invalid JSON from API"));
        }
      });
    });

    req.on("error", (e) => {
      console.error(e);
      reject(new Error("Connection error"));
    });

    req.write(body);
    req.end();
  });
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
  `) as any;
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
  }) as any;
  return data.post;
}

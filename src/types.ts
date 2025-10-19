// src/types.ts
export interface Post {
    id: number;
    title: string;
    url: string;
    image: string;
    author: string;
    authorUrl: string;
    date: string;
    category: string;
    categoryUrl: string;
    comments: number;
    excerpt: string;
}

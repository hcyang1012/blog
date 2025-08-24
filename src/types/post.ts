export interface PostMetadata {
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  author?: string;
  featured?: boolean;
}

export interface Post extends PostMetadata {
  slug: string;
  content: string;
}
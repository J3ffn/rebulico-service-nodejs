interface Media {
  type: string;
  url: string;
  caption: string
}

interface Tag {
  _id: string;
  name: string;
  slug: string;
  description: string;
}

interface Author {
  id: string;
  name: string;
  profile_image: string;
}

interface Collaborator {
  id: string;
  name: string;
}

export default interface CreatePostDTO {
  title: string;
  author: Author;
  collaborators?: Collaborator[];
  media: Media[];
  content: string;
  published_at: string;
  tag: Tag;
}
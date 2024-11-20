interface Media {
  type: string;
  url: string;
  caption: string
}

interface Tag {
  _id: string;
  name: string;
  slug: string;
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
  read_time: number;
  media: Media[];
  status: string;
  content: string;
  published_at: string;
  tag: Tag;
}
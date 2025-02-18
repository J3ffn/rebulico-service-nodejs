export default class AuthorDocument {
  id: string;
  name: string;
  profile_image?: string;
  bio?: string;
  social_links?: { platform: string, url: string }[];
  collaborations?: string[];

  constructor(
    id: string,
    name: string,
    profile_image?: string,
    bio?: string,
    social_links?: { platform: string, url: string }[],
    collaborations?: string[]
  ) {
    this.id = id;
    this.name = name;
    if (profile_image) this.profile_image = profile_image;
    if (bio) this.bio = bio;
    if (social_links) this.social_links = social_links;
    if (collaborations) this.collaborations = collaborations;
  }
}

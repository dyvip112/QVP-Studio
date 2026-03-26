
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  year: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

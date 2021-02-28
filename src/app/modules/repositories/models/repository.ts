export interface IRepository {
  html_url: string;
  name: string;
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  created_at: Date;
  owner: {
    login: string;
    avatar_url: string;
  }
}

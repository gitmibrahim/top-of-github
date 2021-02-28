import { of } from "rxjs";
import { IRepository } from "src/app/modules/repositories/models/repository";

export class TestHelp {
  repos: IRepository[] = []
  createRepos(amount: number): IRepository[] {
    for (let i=0; i<amount; i++) {
      this.repos.push({
        html_url: 'https://html' + i,
        name: 'repo_name' + i,
        description: 'repo_description' + i,
        stargazers_count: i,
        open_issues_count: i,
        created_at: new Date(i.toString()),
        owner: {
          login: 'username' + i,
          avatar_url: 'https://avatar' + i
        }
      })
    }
    return this.repos;
  }

  http = {
    get: () => (of({
      body: {
        items: this.repos,
      },
      headers: {
        headers: {
          Link: `<https://api.github.com/search/repositories?q=created%3A%3E2021-01-24T22%3A00%3A07.866Z&sort=stars&order=desc&page=2>; rel="next", <https://api.github.com/search/repositories?q=created%3A%3E2021-01-24T22%3A00%3A07.866Z&sort=stars&order=desc&page=34>; rel="last"`
        },
        get: function (prop: string) {
          return this.headers[prop]
        }
      }
    }))
  }
}

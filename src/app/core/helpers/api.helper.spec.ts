import { TestBed } from "@angular/core/testing";
import { ApiHelperService } from "./api.helper";

describe("parseLinkHeader", () => {
  let service: ApiHelperService;
  const Link = `<https://api.github.com/search/repositories?q=created%3A%3E2021-01-24T22%3A00%3A07.866Z&sort=stars&order=desc&page=2>; rel="next", <https://api.github.com/search/repositories?q=created%3A%3E2021-01-24T22%3A00%3A07.866Z&sort=stars&order=desc&page=34>; rel="last"`;
  const expectedParsedLink = {
    next: "https://api.github.com/search/repositories?q=created%3A%3E2021-01-26T03%3A00%3A29.308Z&sort=stars&order=desc&page=2",
    last: "https://api.github.com/search/repositories?q=created%3A%3E2021-01-26T03%3A00%3A29.308Z&sort=stars&order=desc&page=34"
  }

  beforeEach(() => {
    service = TestBed.inject(ApiHelperService);
  })

  it('should return parsed link from HttpResponse Link Header', () => {
    let parsedLink = service.parseLinkHeader(Link);
    let parsedLinkKeys = Object.keys(parsedLink);
    expect(parsedLinkKeys.length).toEqual(2);
    expect(parsedLinkKeys).toEqual(['next', 'last']);
  })
})

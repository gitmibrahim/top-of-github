import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  constructor() {}

  /**
   * takes a link header from an http response to parse
   * @param {string} header example: `response.headers.get('Link')`
   * @returns {{string: string}} Object of pagination links `{next: 'https://example.com/api?page=2'}`
   */
  parseLinkHeader(header: string): Object {
    if (!header || header.length == 0) return

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });
    return links;
  }
}

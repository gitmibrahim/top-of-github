import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(http) {
        this.http = http;
        this.currentPage = 1;
        this.news = [];
        this.scrollCallback = this.getStories.bind(this);
    }
    getStories() {
        return this.getLatestStories(this.currentPage);
    }
    getLatestStories(page = 1) {
        return this.http.get(`${BASE_URL}/news?page=${page}`);
    }
    sba7elfol($event) {
        console.log($event.target);
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
const BASE_URL = 'https://node-hnapi.herokuapp.com';
//# sourceMappingURL=header.component.js.map
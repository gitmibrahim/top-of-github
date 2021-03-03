import { Component, Input, OnInit } from '@angular/core';
import { IRepository } from '@repositories/Data/models/repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  @Input() repo: IRepository;

  constructor() { }

  ngOnInit(): void {
  }

  readonly monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  readonly minute = 60;
  readonly hour = this.minute * 60;
  readonly day = this.hour * 24;
  readonly week = this.day * 7;


  relativeDate(date: Date): string {
    const dateT: Date = new Date(date);
    const dateMS: number = +new Date(date);
    const delta: number = Math.round((+new Date - dateMS) / 1000);


    let fuzzy: string;

    if (delta < 30) {
      fuzzy = 'just then.';
    } else if (delta < this.minute) {
      fuzzy = delta + ' seconds ago.';
    } else if (delta < 2 * this.minute) {
      fuzzy = 'a minute ago.'
    } else if (delta < this.hour) {
      fuzzy = Math.floor(delta / this.minute) + ' minutes ago.';
    } else if (Math.floor(delta / this.hour) == 1) {
      fuzzy = '1 hour ago.'
    } else if (delta < this.day) {
      fuzzy = Math.floor(delta / this.hour) + ' hours ago.';
    } else if (delta < this.day * 2) {
      fuzzy = 'yesterday';
    } else if (delta < this.week) {
      fuzzy = Math.floor(delta / this.day) + ' days ago.';
    } else {
      fuzzy = `${dateT.getDate()} ${this.monthNames[dateT.getMonth()]} ${dateT.getFullYear()}`
    }

    return fuzzy;
  }

  dateTime(date: Date) {
    const dateT: Date = new Date(date);
    const offset = dateT.getTimezoneOffset()
    const dTime = new Date(dateT.getTime() - (offset*60*1000))
    return dTime.toISOString().split('T')[0]
  }

  dateTitle(date: Date) {
    const dateT: Date = new Date(date);
    return dateT.toString().split(' ').splice(0,4).join(' ');
  }

}

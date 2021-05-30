import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from, interval, of } from 'rxjs';
import {
  debounceTime,
  filter,
  map,
  mergeAll,
  startWith,
  switchAll,
  switchMap,
  tap,
} from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  dataRender = [];
  queryControl = new FormControl();
  loading: boolean = true;
  users: any[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.queryControl.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((query) => {
          return this._dataService.getUsers(query);
        })
      )
      .subscribe((data) => {
        return (this.users = data);
      });
  }
}

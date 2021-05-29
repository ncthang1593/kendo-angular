import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { filter, map, mergeAll, switchAll, tap } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  dataRender = [];
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this._dataService.getUsers().subscribe((data: any) => {
      this.dataRender = data;
      console.log(data);
    });

    interval(1000).pipe(
      map((val) => {
        return of(val);
      }),
      switchAll()
    );
    // .subscribe(console.log);
  }

  handleFilter(e) {
    let valueSearch = e.value;
    console.log(valueSearch);
    // e.value = '';
  }
}

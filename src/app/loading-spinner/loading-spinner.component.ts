import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: '<div class="loading"></div>',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

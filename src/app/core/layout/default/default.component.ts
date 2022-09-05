import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) { }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width:800px)']).subscribe((res: any) => {
      if (res.matches) {
        setTimeout(() => {
          this.sidenav.mode = 'over';
          this.sidenav.close()
        }, 0);
      } else {
        this.sidenav.mode = 'side';
      }
    })
  }

}

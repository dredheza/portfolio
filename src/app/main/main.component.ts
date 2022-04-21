import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Navbar } from './interfaces/navigation';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  activeTab!: string;
  navbar: Navbar[] = [
    { title: 'BIO', path: '/bio' },
    { title: 'WORK', path: '/work' },
    { title: 'CONTACT', path: '/contact' }
  ];

  loading = true;

  constructor(private router: Router){}

  ngOnInit() {
    this.activeTab = this.router.url ? this.router.url : '/bio'; 

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  onNavItemChange(item: any) {
    this.activeTab = item.path;
    this.router.navigate([this.activeTab])
  }
}

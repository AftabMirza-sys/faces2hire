import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-jobseekernav',
  templateUrl: './jobseekernav.component.html',
  styleUrls: ['./jobseekernav.component.css']
})
export class JobseekernavComponent implements OnInit {

  constructor(private route:Router)
  {

  }

  ngOnInit(): void {
  
}




  onlogout()
  {
    localStorage.removeItem('token');
    this.route.navigate(['./']);
  }
}


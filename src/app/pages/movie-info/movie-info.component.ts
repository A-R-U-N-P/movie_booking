import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  public movieData: any;
  constructor(
    private route: Router
  ) {
    this.movieData = localStorage.getItem("movie_data")
      ? JSON.parse(localStorage.getItem("movie_data") || "")
      : null;
  }

  ngOnInit(): void {

  }

  bookTicket() {

    this.route.navigateByUrl("/show-venues")

  }

}

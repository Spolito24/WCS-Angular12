import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular_12';

  public imgOfTheDay: any;

  constructor(public NasaService: NasaService) {}

  ngOnInit(): void {
    this.NasaService.getImageOfTheDay().subscribe((APODFromJsonFile) => {
      this.imgOfTheDay = APODFromJsonFile;
      console.log(this.imgOfTheDay);
    });
  }
}

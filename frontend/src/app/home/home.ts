import { Component } from '@angular/core';
import { Footer } from './footer/footer';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-home',
  imports: [Footer, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

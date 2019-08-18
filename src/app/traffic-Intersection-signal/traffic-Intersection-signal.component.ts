import { Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';
import { TrafficsignalService } from '../trafficsignal.service';

@Component({
  selector: 'app-traffic-intersection-signal',
  templateUrl: './traffic-Intersection-signal.component.html',
  styleUrls: ['./traffic-Intersection-signal.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(280px)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(0px)'
      })),
      // state('rotate', style({
      //   'background-color': 'black',
      //   transform: ' translate(-100px, 0px) rotate(-90deg)'
      // })),
      // state('go', style({
      //   'background-color': 'orange',
      //   transform: 'translate(-100px, 300px) rotate(-90deg)'
      // })),
      state('straight', style({
        'background-color': 'orange',
        transform: 'translateX(-800px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => rotate', animate(400)),
      // transition('rotate => go', animate(400)),
      transition('highlighted => straight', animate(10000)),
    ])
  ]
})
export class TrafficIntersectionSignalComponent implements OnInit {
  light = 'green';
  state = 'normal';
  appear = false;

  constructor(private lightService: TrafficsignalService) { }

  ngOnInit() {
    setTimeout(() => {this.appear = true; }, 8000);
    this.lightService.getLight(8000).subscribe(light => {
      this.light = light;
      console.log(this.light);
      if (this.light === 'red' ) {
        this.state = 'highlighted';
      } else if (this.light === 'green') {
        this.state = 'straight';
      } else {
        this.state = 'normal';
      }
    });
  }


}

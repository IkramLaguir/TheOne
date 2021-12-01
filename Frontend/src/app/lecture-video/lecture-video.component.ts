import {Component, OnInit} from '@angular/core';
import {DataVideoService} from "../dataVideo/data-video.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-lecture-video',
  templateUrl: './lecture-video.component.html',
  styleUrls: ['./lecture-video.component.scss']
})
export class LectureVideoComponent implements OnInit {

  subscription: Subscription;
  msg: string = '';

  constructor(public dataService : DataVideoService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(
      message =>{
        this.msg = message,
          console.log(this.msg)
      });
  }




}

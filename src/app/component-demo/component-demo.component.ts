import { Component, OnInit } from '@angular/core';
import { ServiceDemoService } from '../service-demo/service-demo.service'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-component-demo',
  templateUrl: './component-demo.component.html',
  styleUrls: ['./component-demo.component.css']
})
export class ComponentDemoComponent implements OnInit {

  result1: {};
  data2Subscription: Subscription;

  constructor( private serviceDemoService: ServiceDemoService ) { }

  ngOnInit() {
    /* Lifecycle hook called after data-bound properties are displayed
      *  -called once
      *  -other lifecycle hooks:
      *     -ngAfterViewInit()
      *     -ngOnCHanges()
      *     -ngOnDestroy()*/
  }

  logResult1() {
    this.getData();
  }

  getData() {
    this.serviceDemoService.getData().subscribe(
      (result) => {this.result1 = result},
      (error) => console.log(error),
      () => {
        console.log('complete');
        console.log(this.result1);
      }
    );
    console.log(this.result1);
  }


  logResult2() {
    this.getData2();
  }

  getData2() {
    this.data2Subscription = this.serviceDemoService.getData2().subscribe(
      (result) => {console.log(result)}
    )
  }

  unsubscribeData2() {
    this.data2Subscription.unsubscribe();
  }

}

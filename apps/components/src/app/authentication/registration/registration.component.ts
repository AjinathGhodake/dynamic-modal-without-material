import { DynamicService } from '@components/dynamic/src/lib/dynamic.service';
import { Component, OnInit, Inject } from '@angular/core';
import { CONTAINER_DATA } from '@components/dynamic/src/lib/dynamic.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(
    @Inject(CONTAINER_DATA) public data,
    public dynamicService: DynamicService
  ) {}

  ngOnInit() {
    console.log(this.data);
  }
  close() {
    this.dynamicService.close();
  }
}

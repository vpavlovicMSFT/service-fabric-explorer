import { Component, Input, OnInit } from '@angular/core';
import { IVisEvent } from 'src/app/Models/eventstore/rcaEngine';
import { RelatedEventsConfigs } from 'src/app/Models/eventstore/RelatedEventsConfigs';
import { Utils } from 'src/app/Utils/Utils';

@Component({
  selector: 'app-rca-summary',
  templateUrl: './rca-summary.component.html',
  styleUrls: ['./rca-summary.component.scss']
})
export class RcaSummaryComponent implements OnInit {

  @Input() events: IVisEvent[] = [];

  data: Record<string, IVisEvent[]> = {};
  constructor() { }

  ngOnInit(): void {
    const explained = this.events.filter(event => RelatedEventsConfigs.some(config => config.eventType === event.visEvent.kind));

    this.data = Utils.groupByFunc<IVisEvent>(explained, item => item.visEvent.kind);
    console.log(this.data);
  }
}

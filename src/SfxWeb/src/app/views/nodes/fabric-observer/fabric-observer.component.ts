import { Component, Injector, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { IResponseMessageHandler } from 'src/app/Common/ResponseMessageHandlers';
import { NodeCollection } from 'src/app/Models/DataModels/collections/NodeCollection';
import { DataService } from 'src/app/services/data.service';
import { SettingsService } from 'src/app/services/settings.service';
import { BaseControllerDirective } from 'src/app/ViewModels/BaseController';

@Component({
  selector: 'app-fabric-observer',
  templateUrl: './fabric-observer.component.html',
  styleUrls: ['./fabric-observer.component.scss']
})
export class FabricObserverComponent extends BaseControllerDirective {

  nodes: NodeCollection;
  // listSettings: ListSettings;
  // tiles: IDashboardViewModel[] = [];

  constructor(private data: DataService, private settings: SettingsService, injector: Injector) {
    super(injector);
   }

   setup() {
    this.nodes = this.data.nodes;

   };


   refresh(messageHandler?: IResponseMessageHandler){
    return this.nodes.refresh(messageHandler).pipe(mergeMap(() => {
      return forkJoin(this.nodes.collection.map(node => node.health.refresh(messageHandler)));
    })).pipe(map(() => {
      const properties = new Set();
      const states = this.nodes.collection.map(node => {
        const event = node.health.getHealthEventBySource("FabricSystemObserver");
                if(event.length) {
                  return event[0].description.split("\n").reduce( (current, line) => {
                    const split = line.split(":");
                    if(split.length > 1) {
                      current[split[0]] = split[1];
                      properties.add(split[0]);
                    }
                    return current;
                  }, {})
                }else{
                  return {};
                }

              })

        console.log(properties, states)
      // console.log(t)
    }))
  }
}

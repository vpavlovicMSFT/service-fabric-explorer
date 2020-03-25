import { Component, OnInit, Injector } from '@angular/core';
import { ApplicationBaseController } from '../applicationBase';
import { DataService } from 'src/app/services/data.service';
import { IResponseMessageHandler } from 'src/app/Common/ResponseMessageHandlers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.scss']
})
export class ManifestComponent extends ApplicationBaseController {

  constructor(protected data: DataService, injector: Injector) { 
    super(data, injector);
  }

  refresh(messageHandler?: IResponseMessageHandler): Observable<any>{
    return this.app.manifest.refresh(messageHandler);
  }

}
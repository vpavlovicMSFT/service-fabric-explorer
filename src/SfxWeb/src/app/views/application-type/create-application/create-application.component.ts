import { Component, OnInit, Inject, Input, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IsolatedAction } from 'src/app/Models/Action';
import { ApplicationType } from 'src/app/Models/DataModels/ApplicationType';
import { Validators, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Constants } from 'src/app/Common/Constants';
import { Observable, of } from 'rxjs';
import { catchError, defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.scss']
})
export class CreateApplicationComponent implements OnInit {

  @Input() inputs: { appType: ApplicationType };
  form: UntypedFormGroup;
  disableSubmit = new EventEmitter<boolean>();

  constructor(public dialogRef: MatDialogRef<CreateApplicationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IsolatedAction,
              private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userInput: [Constants.FabricPrefix + this.inputs.appType.name, [Validators.required, Validators.pattern(/^fabric:\/.+/)]]
    });
    this.form.valueChanges.subscribe(() => {
      this.checkFormValidity();
    })
  }

  ok() : Observable<boolean> {
    return this.inputs.appType.createInstance(this.form.value.userInput).pipe(
      catchError((err) => {
        console.log(err)
        return of(false)
    })).pipe(defaultIfEmpty(true));
  }

  checkFormValidity() {
    this.disableSubmit.emit(!this.form.valid);
  }

}

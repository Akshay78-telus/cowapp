import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';

import { ICow } from '../../models/cow.model';
import { IOption } from '../../models/options.model';

import { CowService } from '../../services/cow.service';

import { cowFormConfig } from '../../config/cow-form-config';


@Component({
  selector: 'app-add-new-cow',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    SelectModule,
  ],
  templateUrl: './add-new-cow.component.html',
  styleUrls: ['./add-new-cow.component.scss']
})
export class AddNewCowComponent implements OnInit {
  @Output() submitForm = new EventEmitter<ICow>();
  @Output() cancelForm = new EventEmitter<void>();

  cowForm!: FormGroup;
  formConfig = cowFormConfig;
  cows: ICow[] = [];

  constructor(
    private fb: FormBuilder,
    private cowService: CowService) {
  }

  ngOnInit(): void {
    this.cowService.cows$.subscribe((cows: ICow[]) => {
      this.cows = cows;
    });
    this.buildForm();
  }

  public mapToDropdownOptions(options: string[]): IOption[] {
    return options.map(o => ({ label: o, value: o }));
  }

  public onSubmit(): void {
    if (this.cowForm.valid) {
      this.submitForm.emit(this.cowForm.value)
    } else {
      this.cowForm.markAllAsTouched();
    }
  }

  public onCancel(): void {
    this.cancelForm.emit();
  }

  private buildForm(): void {
    const group: any = {};
    this.formConfig.forEach(field => {
      const validators = [];

      if (field.required) validators.push(Validators.required);

      if (field.validators?.includes('positive')) {
        validators.push(control => {
          if (control.value === null || control.value === undefined || control.value === '') return null;
          return control.value > 0 ? null : { positive: true };
        }
        );
      }

      if (field.validators?.includes('unique')) {
        validators.push(control =>
          this.cowService.isEarTagUnique(Number(control.value))
            ? null
            : { unique: true }
        );
      }

      group[field.key] = [field.defaultValue || null, validators];
    });
    this.cowForm = this.fb.group(group);
  }
}
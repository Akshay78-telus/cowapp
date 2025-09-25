import { Component, OnInit } from '@angular/core';
import { CowService } from '../../services/cow.service';

import { ICow } from '../../models/cow.model';

import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

import { AddNewCowComponent } from '../add-new-cow/add-new-cow.component';
import { SearchFilterCowListComponent } from '../search-filter-cow-list/search-filter-cow-list.component';

@Component({
    selector: 'app-cow-list',
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        ButtonModule,
        RouterModule,
        SelectModule,
        AddNewCowComponent,
        SearchFilterCowListComponent
    ],
    templateUrl: './cow-list.component.html',
    styleUrls: ['./cow-list.component.scss']
})
export class CowListComponent implements OnInit {
    cows: ICow[] = [];
    showForm: boolean;

    constructor(private cowService: CowService) { }

    ngOnInit(): void {
        this.cowService.cows$.subscribe((cows: ICow[]) => {
            this.cows = cows;
        });
    }

    public onAddNewCow(): void {
        this.showForm = true;
    }

    public onSubmit(newCow: ICow): void {
        this.cowService.addCow(newCow);
        this.showForm = false;
    }

    public onCancel(): void {
        this.showForm = false;
    }

    public onSearchFilterList(filteredCowList: ICow[]): void {
        this.cows = filteredCowList
    }
}
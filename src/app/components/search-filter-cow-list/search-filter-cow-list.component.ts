import { Component, EventEmitter, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';

import { ICow } from '../../models/cow.model';

import { CowService } from '../../services/cow.service';

@Component({
  selector: 'app-search-filter-cow-list',
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    SelectModule,
  ],
  templateUrl: './search-filter-cow-list.component.html',
})
export class SearchFilterCowListComponent {
  @Output() searhFilter = new EventEmitter<ICow[]>();
  searchTag: number;
  filterStatus: string = '';
  filterPen: string = '';
  filteredCows: ICow[] = [];
  cows: ICow[] = [];

  constructor(private cowService: CowService) {}

  ngOnInit(): void {
    this.cowService.cows$.subscribe((cows: ICow[]) => {
      this.cows = cows;
    });
  }

  public applyFilters(): void {
    this.filteredCows = this.cows.filter((cow: ICow) => {
      return (!this.searchTag || cow.earTag === Number(this.searchTag)) &&
        (!this.filterStatus || cow.status === this.filterStatus || this.filterStatus === 'All') &&
        (!this.filterPen || cow.pen === this.filterPen);
    });
    this.searhFilter.emit(this.filteredCows);
  }
}
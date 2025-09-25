import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ICow } from '../../models/cow.model';

import { CowService } from '../../services/cow.service';

@Component({
  selector: 'app-cow-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './cow-details.component.html',
})
export class CowDetailComponent implements OnInit {
  cow: ICow;

  constructor(
    private route: ActivatedRoute, 
    private cowService: CowService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cow = this.cowService.getCowByTag(id);
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICow } from '../models/cow.model';
import { mockCowList } from '../mocks/mock-cow-list';

@Injectable({ providedIn: 'root' })
export class CowService {
  private cows: ICow[] = mockCowList;
  private cowsSubject = new BehaviorSubject<ICow[]>(this.cows);
  cows$ = this.cowsSubject.asObservable();

  addCow(cow: ICow) {
    const newCow = {
      ...cow,
      earTag: Number(cow.earTag),
      weight: Number(cow.weight) ?? null,
      lastEventDate: new Date()
    };
    this.cows.push(newCow);
    this.cowsSubject.next(this.cows);
  }

  getCowByTag(tag: number): ICow | undefined {
    return this.cows.find(c => c.earTag === tag);
  }

  isEarTagUnique(tag: number): boolean {
    return !this.cows.some(c => c.earTag === tag);
  }
}
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIModule } from '../api-endpints';

@Component({
  selector: 'app-shopping-list',
  imports: [CommonModule],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.scss',
})
export class ShoppingList implements OnInit {
  second_title: string = 'Füge etwas hinzu in der Einkaufsliste';
  itemName: string | null = '';
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  items: any[] = [];
  apiEndpoint: string = ApIModule.getApiEndpointShoppingListGet();

  ngOnInit(): void {
    this.loadNewItems();
  }

  loadNewItems(): void {
    this.http.get<any[]>(this.apiEndpoint).subscribe({
      next: (response) => {
        this.items = response;
        console.log('API-Daten erfolgreich geladen:', this.items);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Fehler beim Laden der API:', err);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      },
    });
  }
  addItem(): void {
    this.itemName = prompt('Welches Item möchtest du hinzufügen? (Name einfügen): ');
    if ((this.itemName = null)) {
      return;
    }
    this.http.post(`${this.apiEndpoint}?name=${this.itemName}`, {}).subscribe({
      next: (response) => {
        console.log('Item erfolgreich hinzugefügt: ', response);
        this.loadNewItems();
      },
      error: (err) => {
        console.error('Fehler beim Hinzufügen des Items:', err);
      },
    });
  }
  deleteItem(itemId: number): void {
    this.http.delete(`${this.apiEndpoint}/${itemId}`, {}).subscribe({
      next: (response) => {
        console.log('Item erfolgreich gelöscht: ', itemId);
        this.loadNewItems();
      },
      error: (err) => {
        console.error('Fehler beim löschen des objektes', err);
      },
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIModule } from '../api-endpints';

@Component({
  selector: 'app-shopping-list',
  imports: [CommonModule], // <-- Hinzugefügt
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.scss',
})
export class ShoppingList implements OnInit {
  second_title: string = 'Füge etwas hinzu in der Einkaufsliste';

  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  items: any[] = []; // <-- Von "data" zu "items" geändert
  apiEndpoint: string = ApIModule.getApiEndpointShoppingListGet();

  ngOnInit(): void {
    this.loadNewNumber();
  }

  loadNewNumber(): void {
    this.http.get<any[]>(this.apiEndpoint).subscribe({
      next: (response) => {
        this.items = response; // <-- Hier "items" befüllen
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
}

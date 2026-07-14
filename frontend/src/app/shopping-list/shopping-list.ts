import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ApIModule } from '../api-endpints';

@Component({
  selector: 'app-shopping-list',
  imports: [],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.scss',
})
export class ShoppingList implements OnInit {
  second_title: string = 'Füge etwas hinzu in der Einkaufsliste';

  private http = inject(HttpClient);

  data: any;
  apiEndpoint: string = ApIModule.getApiEndpointShoppingListGet();

  ngOnInit(): void {
    this.loadNewNumber();
  }

  loadNewNumber(): void {
    this.http.get<any>(this.apiEndpoint).subscribe({
      next: (response) => {
        this.data = response;
        console.log('API-Daten erfolgreich geladen:', this.data);
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

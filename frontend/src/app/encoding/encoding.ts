import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ApIModule } from '../api-endpints';

@Component({
  selector: 'app-encoding',
  imports: [],
  templateUrl: './encoding.html',
  styleUrl: './encoding.scss',
})
export class Encoding {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  result = { conveted: '' };

  loadEncoding() {
    const e = document.getElementById('encode-algo') as HTMLSelectElement;
    const mode = document.getElementById('encode-mode') as HTMLSelectElement;
    const text = document.getElementById('encode-text') as HTMLInputElement;
    const encryptionApiString: string = ApIModule.getApiEncode();

    this.http.get<any>(`${encryptionApiString}/${mode.value}-${e.value}/${text.value}`).subscribe({
      next: (response) => {
        this.result = response;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Fehler beim Laden der API:', err);
      },
    });
  }
}

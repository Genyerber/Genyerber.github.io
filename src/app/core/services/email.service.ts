import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormData, FormResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykwqezg';

  constructor(private http: HttpClient) {}

  sendForm(formData: FormData): Observable<any> {
    return this.http.post(this.FORMSPREE_ENDPOINT, {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      _subject: `Nueva solicitud de ${formData.service}`
    });
  }
}
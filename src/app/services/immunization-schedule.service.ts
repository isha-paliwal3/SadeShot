import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImmunizationScheduleService {

  private baseUrl = `${environment.baseUrl}/immunization-schedules`;

  constructor(private http: HttpClient, public authService: AuthService) { }

  getUpcomingVaccinationCount(): Observable<number> {
    const headers = this.authService.getAuthHeaders();
    const url = `${environment.baseUrl}/count-upcoming`;

    return this.http.get<number>(url, { headers });
  }

  getImmunizationSchedule(): Observable<any[]> {
    const headers = this.authService.getAuthHeaders();
    return this.http.get<any[]>(this.baseUrl, { headers });
  }

  getScheduleForVaccine(vaccineId: number): Observable<any> {
    const headers = this.authService.getAuthHeaders();
    const url = `${this.baseUrl}/vaccine/${vaccineId}`;

    return this.http.get<any>(url, { headers });
  }

  getVaccinationsDueWithin7Days(): Observable<any[]> {
    const headers = this.authService.getAuthHeaders();
    const url = `${this.baseUrl}/upcoming`;

    return this.http.get<any[]>(url, { headers });
  }
}

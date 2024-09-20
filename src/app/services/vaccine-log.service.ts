import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VaccineLogService {
  private baseUrl = 'http://localhost:8080/vaccination-logs';

  constructor(private http: HttpClient, public authService: AuthService) { }

  getVaccinationLogsByPatientId(patientId: number): Observable<any[]> {
    const token = this.authService.doctorProfile.jwt;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.baseUrl}/patient/${patientId}`, { headers });
  }

  addVaccinationLog(logData: any): Observable<any> {
    const token = this.authService.doctorProfile.jwt;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.baseUrl, logData, { headers });
  }

  updateVaccinationLog(logData: any): Observable<any> {
    const token = this.authService.doctorProfile.jwt;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(`${this.baseUrl}/${logData.logId}`, logData, { headers });
  }
}

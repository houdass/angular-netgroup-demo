import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private employeeService: EmployeeService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Auth Intercepted', req);
    const copiedReq = req.clone({ params: req.params.set('auth', this.employeeService.getToken()) });
    return next.handle(copiedReq);
  }
}

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { camelCase, clone, isArray, isObject, mapKeys, mapValues } from 'lodash';

@Injectable()
export class CamelcaseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Camelcase Intercepted', req);
    const copiedReq = req.clone();
    // return next.handle(copiedReq).pipe(map((event: HttpEvent<any>) => this.camelizeResponse(event)));
    return next.handle(copiedReq).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          event = event.clone({ body: this.toCamelCase(event.body) });
        }
        return event;
      })
    );
  }

  /**
   *
   * Helper method which transform snake-case object into camelCase one.
   *
   * @param object obj - The litteral object in snake case.
   * @returns object
   */

  toCamelCase(obj) {
    if (isArray(obj)) {
      return obj.map(v => this.toCamelCase(v));
    } else if (isObject(obj)) {
      const cloneObj = mapKeys(clone(obj), (v, k) => camelCase(k));
      return mapValues(cloneObj, v => this.toCamelCase(v));
    } else {
      return obj;
    }
  }
}

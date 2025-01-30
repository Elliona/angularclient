/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RelationDto } from '../../models/relation-dto';

export interface DeleteRelation$Params {
      body: RelationDto
}

export function deleteRelation(http: HttpClient, rootUrl: string, params: DeleteRelation$Params, context?: HttpContext): Observable<StrictHttpResponse<RelationDto>> {
  const rb = new RequestBuilder(rootUrl, deleteRelation.PATH, 'delete');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RelationDto>;
    })
  );
}

deleteRelation.PATH = '/api/relation';

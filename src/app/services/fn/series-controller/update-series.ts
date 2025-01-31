/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {SeriesDto} from '../../models/series-dto';

export interface UpdateSeries$Params {
  seriesId: number;
  body: SeriesDto
}

export function updateSeries(http: HttpClient, rootUrl: string, params: UpdateSeries$Params, context?: HttpContext): Observable<StrictHttpResponse<SeriesDto>> {
  const rb = new RequestBuilder(rootUrl, updateSeries.PATH, 'patch');
  if (params) {
    rb.path('seriesId', params.seriesId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({responseType: 'json', accept: 'application/json', context})
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SeriesDto>;
    })
  );
}

updateSeries.PATH = '/api/series/edit/{seriesId}';

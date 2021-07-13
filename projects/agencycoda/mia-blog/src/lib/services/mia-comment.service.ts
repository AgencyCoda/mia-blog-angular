import { MiaAuthConfig, MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';
import { MiaBaseCrudHttpService } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MiaComment } from '../entities/mia-comment';

@Injectable({
  providedIn: 'root'
})
export class MiaCommentService extends MiaBaseCrudHttpService<MiaComment> {

  constructor(
    @Inject(MIA_AUTH_PROVIDER) protected config: MiaAuthConfig,
    protected http: HttpClient
  ) {
    super(http);
    this.basePathUrl = config.baseUrl + 'mia-blog/comment';
  }
 
  
}

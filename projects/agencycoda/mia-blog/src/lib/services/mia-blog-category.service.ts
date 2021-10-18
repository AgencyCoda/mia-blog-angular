import { MiaAuthConfig, MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';
import { MiaBaseCrudHttpService } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MiaBlogCategory } from '../entities/mia-blog-category';

@Injectable({
  providedIn: 'root'
})
export class MiaBlogCategoryService extends MiaBaseCrudHttpService<MiaBlogCategory> {

  constructor(
    @Inject(MIA_AUTH_PROVIDER) protected config: MiaAuthConfig,
    protected http: HttpClient
  ) {
    super(http);
    this.basePathUrl = config.baseUrl + 'mia-blog/category';
  }
 
  
}

import { MiaBaseCrudHttpService, MiaCoreConfig, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MiaBlogCategory } from '../entities/mia-blog-category';

@Injectable({
  providedIn: 'root'
})
export class MiaBlogCategoryService extends MiaBaseCrudHttpService<MiaBlogCategory> {

  constructor(
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
    protected http: HttpClient
  ) {
    super(config, http);
    this.basePathUrl = config.baseUrl + 'mia-blog/category';
  }
 
  
}

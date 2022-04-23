import { MiaBaseCrudHttpService, MiaCoreConfig, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MiaPost } from '../entities/mia-post';

@Injectable({
  providedIn: 'root'
})
export class MiaBlogService extends MiaBaseCrudHttpService<MiaPost> {

  constructor(
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
    protected http: HttpClient
  ) {
    super(config, http);
    this.basePathUrl = config.baseUrl + 'mia-blog';
  }
 
  
}

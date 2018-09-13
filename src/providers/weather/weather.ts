import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


 

@Injectable()
export class WeatherProvider {
apikey='99dfe35fcb7de1ee';
url;

    WeatherProvider
  constructor(public http: HttpClient, public server:WeatherProvider ) {
    this.url='http://api.wunderground.com/api/'+this.apikey+'/forecast/q';

  }
  getWeather(city,state){

    return this.http.get(this.url+'/'+state+'/'+city+'.json')
    .map(res=>res.Json());
  }

}

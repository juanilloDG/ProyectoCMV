import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class XmlReadService {
  title = 'read-xml-angular8';
  public xmlItems: any;

  constructor(private _http: HttpClient) { }

  loadXML() {  
    return this._http.get('/assets/datos.xml',  
      {  
        headers: new HttpHeaders()  
          .set('Content-Type', 'text/xml')  
          .append('Access-Control-Allow-Methods', 'GET')  
          .append('Access-Control-Allow-Origin', '*')  
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
        responseType: 'text'  
      })
  } 

  parseXML(data: string) {
    return new Promise(resolve => {
      var k: string | number,
        arr: any = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err: any, result: any) {
        var obj = result.orla;
        for (k in obj.card) {
          var item = obj.card[k];
          arr.push({
            name: item.name[0],
            photo: item.photo[0],
            foot: item.foot[0],
            details: item.details[0]
          });
        }
        resolve(arr);
      });
    });
  }

}


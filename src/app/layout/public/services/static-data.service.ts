import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  issues = [
    {
      id:0,
      title:'Angular and Laravel integration',
      description:'I need some feedback from you guys, what the best structure to combine these two framework? And I am interesting to know how can we build this two framework together for deployment?',
      writer:'Zia',
      stackoverflow:'https://stackoverflow.com/questions/30148240/combine-angular-ngboilerplate-and-laravel',
      github:'https://github.com/toni-rmc/laravel-angular-integration',
      youtube:'https://www.youtube.com/watch?v=4uajiXW5R3o&t=17s',
      comments:'This is a realy great module'
    },
    {
      id:1,
      title:'Converting Gregorian date to Hijri date',
      description:'How do you convert Gregorian dates to Islamic Hijri dates using JavaScript?',
      writer:'Zia', 
      stackoverflow:'https://stackoverflow.com/questions/5177598/converting-gregorian-date-to-hijri-date',
      github:'',
      youtube:'',
      comments:''
    },
    {
      id:3,
      title:'How to convert a string to json object javascript',
      description:'The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.',
      writer:'Zia',
      stackoverflow:'https://stackoverflow.com/questions/10976897/converting-a-string-to-json-object',
      github:'',
      youtube:'',
      comments:''
    }

  ]

  constructor() { }

  getBooks(){
    return this.issues;
  }
}

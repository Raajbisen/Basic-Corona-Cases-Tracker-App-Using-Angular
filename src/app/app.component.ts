import { Component } from '@angular/core';
import {CoronaService} from './services/corona.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries:any
  country:any
  confirmed:Number | undefined
  recovered:Number | undefined
  deaths:Number | undefined
  date:Number | undefined



  constructor(private corona:CoronaService){}

  ngOnInit(){


    this.corona.getCountries().subscribe((data)=>{

      console.log(data)
      this.countries= data 
    }) 
  
  }

  getCoronaData(){

    this.corona.getCoronaRealTimeData(this.country).subscribe((data)=>{

      console.log(data)
      var index = data.length-1
      this.confirmed= data[index].Confirmed
      this.recovered= data[index].Recovered
      this.deaths= data[index].Deaths
      this.date= data[index].Date



    })

  }
  getCountry(event:any){
this.country= (<HTMLInputElement>event.target).value

  }

}

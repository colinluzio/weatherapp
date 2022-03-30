export interface ILocation {
   title:string;
   woeid:number;
}

export interface IDay {
   weather_state_abbr: string;
   weather_state_name:string;
   applicable_date:string;
   min_temp:number;
   max_temp:number;
}
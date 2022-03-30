const nth = (d:number)=> {
    const dString = String(d);
    const last = +dString.slice(-2);
    if (last > 3 && last < 21) return 'th';
    switch (last % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
export const getDay = (date:string)=>{
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const _date = new Date(date);
   
   return days[_date.getDay()];
}

export const getDate = (date:string)=>{
    const _date = new Date(date);

    return `${_date.getDate()}${nth(_date.getDate())}`
}
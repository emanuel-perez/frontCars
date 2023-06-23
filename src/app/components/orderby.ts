import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
 name: "orderby"
})
/*
    The main options will be price, year, mileage
*/
export class OrderByPipe implements PipeTransform {
 transform(array: any, sortBy:string): any[] {

    if(sortBy == 'priceLH') {
        array.sort((a:any, b:any) => {
            var tmp = a.Price.replace("$","").replace(",","");
            var tmpInt = parseInt(tmp)
            //console.log(tmp);
            var tmp2 = b.Price.replace("$","").replace(",","");
            var tmpInt2 = parseInt(tmp2)
            //console.log(tmp2)

            if(tmpInt < tmpInt2)
                return -1;
            else if(tmpInt > tmpInt2)
                return 1;
            else
                return 0;
        })
        for(let i = 0; i < array.length; i++) {
            array[i].id = i+1;
        }
    }
    else if(sortBy == 'priceHL') {
        console.log("we made it here")
        array.sort((a:any, b:any) => {
            var tmp = a.Price.replace("$","").replace(",","");
            var tmpInt = parseInt(tmp)
            //console.log(tmp);
            var tmp2 = b.Price.replace("$","").replace(",","");
            var tmpInt2 = parseInt(tmp2)
            //console.log(tmp2)

            if(tmpInt > tmpInt2)
                return -1;
            else if(tmpInt < tmpInt2)
                return 1;
            else
                return 0;
        })
        for(let i = 0; i < array.length; i++) {
            array[i].id = i+1;
        }
        //console.log(array);
    }
    else if(sortBy == 'mileageLH'){
        array.sort((a:any, b:any) => {
            if(a.Mileage < b.Mileage)
                return -1;
            else if(a.Mileage > b.Mileage)
                return 1;
            else
                return 0;
        })
        for(let i = 0; i < array.length; i++) {
            array[i].id = i+1;
        }
    }
    else if(sortBy == 'mileageHL') {
        array.sort((a:any, b:any) => {
            if(a.Mileage > b.Mileage)
                return -1;
            else if(a.Mileage < b.Mileage)
                return 1;
            else
                return 0;
        })
        for(let i = 0; i < array.length; i++) {
            array[i].id = i+1;
        }
    }
    else if(sortBy == 'yearLH') {
        array.sort((a:any, b:any) => {
            if(a.Year < b.Year)
                return -1;
            else if(a.Year > b.Year)
                return 1;
            else
                return 0;
        })
        for(let i = 0; i < array.length; i++) {
            array[i].id = i+1;
        }
    }
    else if(sortBy == 'yearHL') {
        array.sort((a:any, b:any) => {
            if(a.Year > b.Year)
                return -1;
            else if(a.Year < b.Year)
                return 1;
            else
                return 0;
        })
        for(let i = 0; i < array.length; i++) {
            array[i].id = i+1;
        }
    }
    
    return array;

  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any, sortBy, order ): any[] {
    const sortOrder = order ? order : 'asc'; // setting default ascending order

     return order(array, [sortBy], [sortOrder]);
     }

}




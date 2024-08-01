import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Pipe({
  name: 'searchProducts',
  standalone: true,
})
export class SearchProductsPipe implements PipeTransform {
  transform(array: IProduct[], text: string): IProduct[] {
    return array.filter((ele) =>
      ele.title.toLowerCase().includes(text.toLowerCase())
    );
  }
}

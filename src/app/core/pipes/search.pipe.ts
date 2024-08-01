import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from '../interfaces/icategory';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(array: ICategory[], text: string): ICategory[] {
    return array.filter((ele) =>
      ele.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}

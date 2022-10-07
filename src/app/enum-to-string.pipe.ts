import { RoleType } from './../user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToString'
})
export class EnumToStringPipe implements PipeTransform {
  // enum object on which you want this pipe to work
  transform(value: number): string {
    return RoleType[value];
  }
}

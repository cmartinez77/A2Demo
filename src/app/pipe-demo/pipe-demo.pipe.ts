import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDemo'
})
export class PipeDemoPipe implements PipeTransform {

  transform(value: number, exponent: string): number {
    const exp = parseFloat(exponent);
    return Math.pow(value, exp);

  }

}

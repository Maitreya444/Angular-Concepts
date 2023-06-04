import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trial'
})
export class TrialPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

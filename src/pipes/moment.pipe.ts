import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {
  transform(value: string, format = 'YYYY-MM-DD HH:mm:ss'): string {
    return moment(value).format(format)
  }
}

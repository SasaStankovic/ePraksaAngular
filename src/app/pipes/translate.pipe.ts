import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {

  transform(value: string): any {
    if (value == null)
      return;

    switch (value) {
      case "PENDING": return "Na čekanju";
      case "ACTIVE": return "Aktivna";
      case "DENIED": return "Odbijena";
      case "FINISHED": return "Završena";
      case "PUBLISHED": return "Objavljena";
      case "ACCEPTED": return "Prihvaćeno";
      default: return "";
    }
  }

}

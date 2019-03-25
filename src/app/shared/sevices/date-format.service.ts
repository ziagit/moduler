import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material';
const SUPPORTS_INTL_API = typeof Intl !== 'undefined';
@Injectable({
  providedIn: 'root'
})
export class DateFormatService extends NativeDateAdapter {
  useUtcForDisplay = true;

  format(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

}

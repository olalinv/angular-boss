import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './converter/converter.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ConverterComponent],
  exports: [ConverterComponent]
})
export class CurrencyModule {}

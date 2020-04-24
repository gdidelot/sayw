import { Component, Input } from '@angular/core';

@Component({
  selector: 'account',
  templateUrl: 'create.account.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class CreateAccountComponent  {
  @Input() name: string;
}

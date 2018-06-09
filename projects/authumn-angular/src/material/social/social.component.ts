import { Component, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'authumn-mat-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class MaterialSocialComponent {
  @Input() signIn = new EventEmitter()
}

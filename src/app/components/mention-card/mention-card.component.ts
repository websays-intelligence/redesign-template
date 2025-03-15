// src/app/components/mention-card/mention-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mention-card',
  templateUrl: './mention-card.component.html',
  styleUrls: ['./mention-card.component.scss']
})
export class MentionCardComponent {
  @Input() mention: any;
}

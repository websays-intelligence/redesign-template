import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionCardComponent } from './mention-card.component';

describe('MentionCardComponent', () => {
  let component: MentionCardComponent;
  let fixture: ComponentFixture<MentionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

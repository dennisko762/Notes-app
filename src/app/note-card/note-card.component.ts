import { AfterViewInit, Input, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements AfterViewInit {

  @Input() title: string;
  @Input() body: string;

  @ViewChild('truncator', { static: true }) truncater: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;
  @ViewChild('noteP', { static: true }) noteP: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }


  ngAfterViewInit(): void {
    if (this.noteP.nativeElement.scrollHeight > this.bodyText.nativeElement.clientHeight) {
      this.renderer.setStyle(this.truncater.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncater.nativeElement, 'display', 'none');
    }
  }
}

import { NotesService } from './../../shared/notes.service';
import { Note } from './../../shared/note.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  public note: Note;

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.note = new Note();
  }

  onSubmit(form: NgForm): void {
    this.noteService.add(form.value);
  }


}

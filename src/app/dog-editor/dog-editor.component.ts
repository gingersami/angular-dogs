import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Dog} from '../dog';
import {DogService} from '../dog.service';

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})
export class DogEditorComponent implements OnInit {
  @Input() dog: Dog = new Dog();
  @Output() refresh = new EventEmitter();

  constructor(private dogService: DogService) {
  }

  ngOnInit() {

  }

  isEditMode() {
    return this.dog.hasOwnProperty('id');
  }

  cancelEditMode() {
    this.dog = new Dog();
  }

  updateDog() {
    // this.dogService.editDog(this.dog.id, this.dog);
    this.dogService.editDog(this.dog.id,this.dog)
      .subscribe(data => console.log(data),
        (err) => console.log(err),
        () => this.refresh.emit()
        );
  }

  addDog() {
    this.dogService.addDog(this.dog)
      .subscribe(data => console.log(data),
        (err) => console.log(err),
        () => this.refresh.emit()

      );
  }

}

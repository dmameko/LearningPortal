import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})
export class DropdownComponent {
  @Input() public selectedItem!: string;
  @Input() public items: string[] = [];
  @Output() public itemSelected = new EventEmitter<string>();

  public showDropdown = false;

  public toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  public selectItem(item: string): void {
    this.itemSelected.emit(item);
    this.toggleDropdown();
  }
}

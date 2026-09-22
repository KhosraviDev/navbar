import {
  Component,
  ElementRef,
  input,
  OnInit,
  output,
  QueryList,
  signal,
  ViewChildren,
} from '@angular/core';
import { NavItems } from '../nav-items.model';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  // Selecting elements that have 'navItem' Template Variable name
  @ViewChildren('navItem') navItemElements?: QueryList<ElementRef>;

  // Getting the 'navItems' Array from app.ts in the format of an Input
  navItems = input.required<NavItems[]>();

  // Defining an Output for selecting elements
  select = output<number>();

  // Defining a property for 'selectedNavItem' 
  selectedNavItem = signal<NavItems | undefined>(undefined);

  // Defining properties for Width & Left of selected nav item & setting initial value for them
  selectedNavItemWidth: number = 63;
  selectedNavItemLeft: number = 12;

  // Defining onClick Method for click event
  onClick(id: number) {
    // Emitting the id of clicked element
    this.select.emit(id);

    // Setting selectedNavItem to clicked element
    this.selectedNavItem.set(this.navItems()?.find((navItem) => navItem.id === id));

    // Calculating the index of clicked element in 'navItemElements' Array
    const index = this.navItems().findIndex((navItem) => navItem.id === id);
    const clickedElement = this.navItemElements?.get(index);

    // Setting the Width & Left of selected nav item to 'clickedElement' offsetWidth & offsetLeft
    this.selectedNavItemWidth = clickedElement?.nativeElement.offsetWidth;
    this.selectedNavItemLeft = clickedElement?.nativeElement.offsetLeft;
  }

  // Defining a lifecycle hook method for fixing the error
  ngOnInit() {
    this.selectedNavItem.set(this.navItems()[0]);
  }
}

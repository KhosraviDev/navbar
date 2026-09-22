import { Component, ElementRef, input, OnInit, output, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { NavItems } from '../nav-items.model';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  @ViewChildren('navItem') navItemElements?: QueryList<ElementRef>;
  
  navItems = input.required<NavItems[]>();
  select = output<number>();
  selectedNavItem = signal<NavItems | undefined>(undefined);

  selectedNavItemWidth: number = 63
  selectedNavItemLeft: number = 12

  onClick(id: number) {
    this.select.emit(id);
    this.selectedNavItem.set(this.navItems()?.find((navItem) => navItem.id === id));
    const index = this.navItems().findIndex((navItem) => navItem.id === id);

    const clickedElement = this.navItemElements?.get(index);

    this.selectedNavItemWidth = clickedElement?.nativeElement.offsetWidth
    this.selectedNavItemLeft = clickedElement?.nativeElement.offsetLeft
  }

  ngOnInit() {
    this.selectedNavItem.set(this.navItems()[0]);
  }
}

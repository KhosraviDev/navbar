import { Component, input } from '@angular/core';
import { NavItems } from '../nav-items.model';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  // Getting the 'selectedNavItem' property from app.ts in the format of an Input
  selectedNavItem = input.required<NavItems | undefined>()
}

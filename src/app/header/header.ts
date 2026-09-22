import { Component, input } from '@angular/core';
import { NavItems } from '../nav-items.model';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  selectedNavItem = input.required<NavItems | undefined>()
}

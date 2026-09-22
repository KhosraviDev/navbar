import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { NavItems } from './nav-items.model';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Navbar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  navItems = [
    {
      id: 1,
      name: 'Home',
      description: 'Everything starts from here.',
      color: '#84cc16',
      colorRGB: '132, 204, 22',
      className: 'bi bi-house'
    },
    {
      id: 2,
      name: 'Profile',
      description: 'A closer look at the creator.',
      color: '#a855f7',
      colorRGB: '168, 85, 247',
      className: 'bi bi-person-circle'
    },
    {
      id: 3,
      name: 'Search',
      description: 'Find what you are looking for.',
      color: '#38bdf8',
      colorRGB: '56, 189, 248',
      className: 'bi bi-search'
    },
    {
      id: 4,
      name: 'Messages',
      description: 'Stay connected with your ideas.',
      color: '#f97316',
      colorRGB: '249, 115, 22',
      className: 'bi bi-chat-left'
    },
    {
      id: 5,
      name: 'Settings',
      description: 'Fine tune your experience.',
      color: '#ec4899',
      colorRGB: '236, 72, 153',
      className: 'bi bi-gear'
    }
  ]

  selectedNavItem?: NavItems = this.navItems[0]

  onSelect(id: number) {
    this.selectedNavItem = this.navItems.find((navItem) => navItem.id === id)
  }
}

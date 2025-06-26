import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <nav>
      <a routerLink="/login" routerLinkActive="active">Login</a> |
      <a routerLink="/profile" routerLinkActive="active">Profile</a> |
      <a routerLink="/job-board" routerLinkActive="active">Job Board</a> |
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
    </nav>
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
  styles: [
    `nav {
      display: flex;
      gap: 0.75rem;
      background: #7c3aed; /* purple */
      padding: 0.5rem 1rem;
      border-radius: 0 0 4px 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      margin-bottom: 1.2rem;
    }
    nav a {
      color: #e5e7eb; /* light gray */
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      padding: 0.3rem 0.7rem;
      border-radius: 3px;
      transition: background 0.2s, color 0.2s;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
    nav a.active, nav a:hover {
      background: #f59e42; /* accent color: orange */
      color: #7c3aed;
    }
    nav a:not(:last-child)::after {
      content: '';
      margin-left: 0.75rem;
    }
    @media (max-width: 600px) {
      nav {
        flex-direction: column;
        gap: 0.3rem;
        padding: 0.5rem;
      }
      nav a {
        font-size: 0.95rem;
        padding: 0.3rem;
      }
    }
    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 1.2rem;
    }
    `
  ],
})
export class App {
  protected title = 'tutior-link';
}

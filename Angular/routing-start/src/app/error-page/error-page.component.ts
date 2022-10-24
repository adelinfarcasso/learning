import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // exportarea mesajului static, setat in component din AppRoutingModules
    this.errorMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
  }
}

// Resolver - pentru pasarea de date dinamice prin Routes
// Diferenta fata de CanActivate este ca Resolver nu decide daca componentul va fi randat sau nu
// Resolver va fi randat mereu doar ca face fetch la date de care are nevoie mai tarziu

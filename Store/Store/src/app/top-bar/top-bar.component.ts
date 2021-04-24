import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../interfaces/category';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  currentUser: User;

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService, private router: Router,
    private authenticationService: AuthentificationService, private userService: UserService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  isToogled = true;

  categories: Category[];
  users: User[];
  jsons = localStorage.getItem('currentUser') || [];
  name: User;
  username: User;

  toggle() {
    this.isToogled = !this.isToogled;
  }

  ngOnInit(): void {
    this.getCategories();
    this.username = JSON.parse(String(this.jsons)).email;
    this.name = JSON.parse(String(this.jsons)).name;
  }

  reload() {
    location.reload();
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe( categories => this.categories = categories);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
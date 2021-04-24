import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {ProductListComponent} from '../product-list/product-list.component';
import {Category} from '../interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories;
  selectedCategory: Category;
  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    const a = this.service.getCategory();
    a.subscribe(cat => this.categories = cat );
  }
  onSelect(category: Category) {
    this.selectedCategory = category;
  }
}

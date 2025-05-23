// Angular CommonModule provides common directives like ngIf and ngFor
import { CommonModule } from '@angular/common';
// Component decorator, HostListener for event binding, OnInit lifecycle hook
import { Component, HostListener, OnInit } from '@angular/core';
// Importing the PostComponent for use in this component's template
import { PostComponent } from '../post/post.component';
// Service to fetch posts from an API or data source
import { PostService } from '../../services/post.service';

/**
 * PostListComponent displays a list of posts with infinite scroll functionality.
 * It fetches posts in pages and appends them as the user scrolls.
 */
@Component({
  selector: 'app-post-list', // Selector for using this component in templates
  imports: [CommonModule, PostComponent], // Modules and components used in this component
  templateUrl: './post-list.component.html', // HTML template for the component
  styleUrl: './post-list.component.scss', // SCSS styles for the component
})
export class PostListComponent implements OnInit {
  /**
   * Array to store the loaded posts
   */
  posts: any[] = [];
  /**
   * Indicates if posts are currently being loaded
   */
  loading = false;
  /**
   * Current page number for pagination
   */
  page = 1;
  /**
   * Number of posts to fetch per page
   */
  limit = 10;
  /**
   * Stores error messages to display in the UI
   */
  errorMessage = '';

  /**
   * Injects the PostService for fetching posts
   */
  constructor(private postService: PostService) {}

  /**
   * Lifecycle hook: called once after component initialization
   * Loads the initial set of posts
   */
  ngOnInit(): void {
    this.loadPosts();
  }

  /**
   * Handles errors during post fetching
   * @param error - The error object received from the API or service
   */
  private handleError(error: any): void {
    console.error('Error fetching posts:', error);
    this.errorMessage =
      'Something ent wrong while fetching posts. Please try again later!';
  }

  /**
   * Loads posts from the service using the current page and limit
   * Appends new posts to the existing list and increments the page
   * Handles loading state and errors
   */
  loadPosts(): void {
    this.loading = true;
    this.postService.getPosts(this.page, this.limit).subscribe({
      next: (newPosts) => {
        if (newPosts && newPosts.length > 0) {
          // append new posts to the existing list
          this.posts = [...this.posts, ...newPosts];
          this.page++;
          this.errorMessage = '';
        }
      },
      error: (error) => {
        this.handleError(error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  /**
   * Listens to the window scroll event
   * Loads more posts when the user scrolls to the bottom and not already loading
   */
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight &&
      !this.loading
    ) {
      this.loadPosts();
    }
  }
}

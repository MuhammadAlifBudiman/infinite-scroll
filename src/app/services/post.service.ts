// post.service.ts - Service for fetching posts from an API using Angular's HttpClient
//
// This service provides a method to fetch paginated posts from the JSONPlaceholder API.
// It is provided in the root injector, making it available throughout the app.

import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests
import { Injectable } from '@angular/core'; // Import Injectable decorator for dependency injection
import { Observable } from 'rxjs'; // Import Observable for handling asynchronous data

/**
 * Injectable service for fetching posts from a remote API.
 * Provided in the root injector.
 */
@Injectable({
  providedIn: 'root', // Makes this service available application-wide
})
export class PostService {
  /**
   * Base URL for the posts API endpoint.
   * @private
   * @readonly
   */
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';

  /**
   * Constructor injects Angular's HttpClient for HTTP operations.
   * @param http Angular HttpClient instance
   */
  constructor(private http: HttpClient) {}

  /**
   * Fetches posts from the API with pagination.
   * @param page The page number to fetch
   * @param limit The number of posts per page
   * @returns Observable emitting an array of posts
   */
  getPosts(page: number, limit: number): Observable<any[]> {
    // Make a GET request to the API with pagination query parameters
    return this.http.get<any[]>(
      `${this.API_URL}?_page=${page}&_limit=${limit}`
    );
  }
}

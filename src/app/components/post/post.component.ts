// Angular core imports for component creation and input binding
import { Component, Input, OnInit } from '@angular/core';

/**
 * PostComponent displays a single post with a random photo.
 *
 * @selector app-post
 * @input post - An object containing the post's title and body
 * @description Generates a random photo for each post instance.
 */
@Component({
  selector: 'app-post', // Component selector for usage in templates
  imports: [], // No additional modules imported
  templateUrl: './post.component.html', // HTML template for the component
  styleUrl: './post.component.scss', // SCSS styles for the component
})
export class PostComponent implements OnInit {
  /**
   * Input property to receive post data from parent component.
   * @type {{ title: string; body: string }}
   */
  @Input() post!: { title: string; body: string };

  /**
   * Holds the URL of a randomly generated photo.
   */
  randomPhotoUrl!: string;

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * Calls the method to generate a random photo URL.
   */
  ngOnInit(): void {
    this.generateRandomPhoto();
  }

  /**
   * Generates a random photo URL using a random seed.
   * Sets the randomPhotoUrl property.
   */
  private generateRandomPhoto(): void {
    const randomSeed = this.generateRandomNumber(1000); // Generate a random number as seed
    this.randomPhotoUrl = `https://picsum.photos/seed/${randomSeed}/50`; // Set photo URL
  }

  /**
   * Generates a random integer from 0 up to (but not including) max.
   * @param max - The upper bound for the random number
   * @returns A random integer between 0 and max-1
   */
  private generateRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }
}

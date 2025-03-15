# Creating an Angular Library

This guide walks you through the process of creating an Angular library step by step.

## Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install Angular CLI globally (if not installed):
  ```sh
  npm install -g @angular/cli
  ```

## Step 1: Create an Angular Workspace
Create a new Angular workspace (or use an existing one):
```sh
ng new angular-library-demo --create-application=false
cd angular-library-demo
```

## Step 2: Generate a New Library
Run the following command to generate an Angular library:
```sh
ng generate library logger
```
This creates a new folder `projects/logger` inside the workspace.

## Step 3: Implement the Library
Navigate to the `projects/logger/src/lib` directory and create a `logger.service.ts` file:
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string): void {
    console.log(message);
  }

  error(message: string): void {
    console.error(message);
  }

  warn(message: string): void {
    console.warn(message);
  }
}
```

### Step 4: Create a Module (Optional)
If you want to package the service inside a module, create `logger.module.ts`:
```typescript
import { NgModule } from '@angular/core';
import { LoggerService } from './logger.service';

@NgModule({
  providers: [LoggerService],
})
export class LoggerModule {}
```

## Step 5: Export Public API
Modify `projects/logger/src/public-api.ts` to include:
```typescript
export * from './lib/logger.service';
export * from './lib/logger.module';
```

## Step 6: Build the Library
Run the following command to build the library:
```sh
ng build logger
```
This generates the output inside the `dist/logger` folder.

## Step 7: Use the Library Locally
In a separate Angular project, install the library locally:
```sh
npm install ../dist/logger
```
Import and use it in an Angular component:
```typescript
import { Component } from '@angular/core';
import { LoggerService } from 'logger';

@Component({
  selector: 'app-root',
  template: `<h1>Logger Example</h1>`
})
export class AppComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('Logger is working!');
  }
}
```

## Step 8: Publish to NPM (Optional)
1. Login to NPM:
   ```sh
   npm login
   ```
2. Publish the library:
   ```sh
   npm publish dist/logger --access public
   ```

## Conclusion
You have successfully created and used an Angular library! 🎉


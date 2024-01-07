# Next.js Note Project Overview

## Fundamentals

- Utilizes Next.js, a React framework for building web applications.
- Implements components, pages, and layouts to structure the application.

## Styling

- Utilizes Tailwind CSS for styling.
- Includes CSS modules for component-specific styling.

## Routing & Navigation

- Implements client-side navigation with Next.js `Link` and `useRouter`.
- Demonstrates dynamic routing with parameters.

## Building APIs

- Utilizes Next.js API routes for building serverless API endpoints.
- Implements CRUD operations for managing users.

## Database Integration with Prism

- Integrates with the Prisma ORM for database interactions.
- Demonstrates fetching and creating user data from the database.

## Uploading Files

- Implements file upload functionality using Cloudinary.
- Uses the `CldUploadWidget` for handling file uploads.

## Authentication with Next Auth

- Implements authentication using Next Auth.
- Supports email/password and Google provider authentication.

## Sending Emails

- Utilizes Next.js API routes to handle sending emails.
- Demonstrates email-related functionality with Next.js.

## Optimizations

- Implements image optimization with the `next/image` component.
- Utilizes dynamic imports for code splitting and lazy loading.

## Deployment

- Deploys the application, possibly using platforms like Vercel or Netlify.
- Implements Google Analytics for tracking website performance.

## Additional Components

### `AdminLayout` Component

- A layout component for admin pages with a sidebar.

### `AdminHomePage` Component

- A placeholder component for the admin home page.

### `authOptions` Configuration

- Configuration for Next Auth, including PrismaAdapter and multiple authentication providers.

### `GET` API Routes

- API routes handling token retrieval and user data retrieval.

### `POST` API Routes

- API routes handling user creation and authentication.

### `ProductCard` Component

- A product card component for displaying product information.

### `NavBar` Component

- Navigation bar component with conditional rendering based on authentication status.

### `RootLayout` Component

- Root layout component with global styles and navigation.

### `Loading` Component

- A loading spinner component.

### `AuthProvider` Component

- A context provider for handling user sessions.

### `AddToCart` Component

- A button component for adding items to the cart.

### `HeavyComponent` Component

- A placeholder for a heavy component using dynamic imports.

### `ProductPage` Component

- A page component for displaying product details.

### `UploadPage` Component

- A page component for handling file uploads using Cloudinary.

### `NewUserPage` Component

- A page component for creating new users.

### `UsersPage` Component

- A page component for displaying a list of users with sorting.

### `UserTable` Component

- A table component for rendering user data with sorting functionality.

### `UserDetailPage` Component

- A page component for displaying details of a specific user.

### `UserNotFoundPage` Component

- A page component displayed when a user is not found.

### `PhotoPage` Component

- A page component for displaying photo details.

### `ErrorPage` Component

- A generic error page component.

### `GoogleAnalyticsScript` Component

- A component for adding Google Analytics script to the application.

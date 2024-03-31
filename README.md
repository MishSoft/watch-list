Watch List
Watch List is a web application that allows users to keep track of their watch collection. Users can add watches to their list, edit watch details, and delete watches they no longer own. The application uses Supabase for authentication and data storage, providing a secure and reliable backend for managing user data.

Features
Add watches: Users can add new watches to their collection by entering the brand, model, and reference number.
Edit watches: Users can edit the details of existing watches, such as the brand, model, and reference number.
Delete watches: Users can delete watches from their collection if they no longer own them.
Authentication: The application uses Supabase authentication to secure user accounts and data.
Technologies Used
React for building the user interface.
Supabase for authentication and data storage.
Tailwind CSS for styling the application.
Next.js for server-side rendering and routing.
Getting Started
To run the application locally, follow these steps:

Clone the repository: git clone https://github.com/your-username/watch-list.git
Navigate to the project directory: cd watch-list
Install dependencies: npm install
Set up environment variables: Create a .env.local file in the root directory and add your Supabase URL and API key:
makefile
Copy code
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_KEY=your-supabase-api-key
Start the development server: npm run dev
Open your browser and navigate to http://localhost:3000 to view the application.
Contributing
Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or create a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

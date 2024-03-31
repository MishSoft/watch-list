import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-300">
      <div className="max-w-lg w-full bg-gray-800 rounded-lg shadow-lg">
        <div className="p-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Welcome To Watch List
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
            Your personal space to curate and manage a wishlist of your favorite
            watches. Sign in to create, view, edit, and delete watches from your
            wishlist.
          </p>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

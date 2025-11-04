import Link from "next/link";
import Button from "../shared/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-5xl font-extrabold text-gray-800 text-center">404</h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        The page you are looking for does not exist.
      </p>

      {/* Top-left button */}
      <div className="absolute top-4 left-4">
        <Link href="/">
          <Button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-200">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <aside className="flex flex-col font-bold text-xl gap-12 justify-center space-y-6  text-gray-700">
      <div>
        <h3 className="font-semibold mb-1 text-orange-500">Email</h3>
        <p>support@skillbridge.com</p>
      </div>

      <div>
        <h3 className="font-semibold mb-1 text-orange-500">Phone</h3>
        <p>+91 00000 00000</p>
      </div>

      <div>
        <h3 className="font-semibold mb-1 text-orange-500">Address</h3>
        <p>Somewhere in the World</p>
      </div>

      <div className=" ">
        <h3 className="font-semibold mb-1 text-orange-500">Social Profiles</h3>
        <div className="flex  gap-3 mt-6">
          <a
            href="#"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            <FaFacebookF size={28} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            <FaLinkedinIn size={28} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            <FaInstagram size={28} />
          </a>
        </div>
      </div>
    </aside>
  );
}

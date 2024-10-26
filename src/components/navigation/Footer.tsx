import React from "react";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-end gap-6 md:gap-10">
        {/* Social Media Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <Link href="https://facebook.com">FACEBOOK </Link>
            </li>
            <li>
              <Link href="https://twitter.com">TWITTER </Link>
            </li>
            <li>
              <Link href="https://instagram.com">INSTAGRAM </Link>
            </li>
          </ul>
        </div>

        {/* Filler Links Set 1 */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">ABOUT US </Link>
            </li>
            <li>
              <Link href="#">SERVICES </Link>
            </li>
            <li>
              <Link href="#">CONTACT </Link>
            </li>
          </ul>
        </div>

        {/* Filler Links Set 2 */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">BLOG </Link>
            </li>
            <li>
              <Link href="#">FAQ </Link>
            </li>
            <li>
              <Link href="#">Support </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

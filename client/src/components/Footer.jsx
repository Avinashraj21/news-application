import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer fixed w-full left-0 bottom-0 flex justify-center items-center p-4 bg-gray-800 text-white">
      <div className="text-center">
        <p className="mb-2">Copyright &copy; {currentYear}</p>
        <div className="flex space-x-4">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

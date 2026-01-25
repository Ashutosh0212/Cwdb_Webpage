export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Central Wool Development Board</h3>
            <p className="text-sm text-gray-300">
              Promoting and developing the wool industry in India
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about/cwdb" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/schemes" className="text-gray-300 hover:text-white">Schemes</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-sm text-gray-300">
              Central Wool Development Board<br />
              Ministry of Textiles<br />
              Government of India
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Central Wool Development Board. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

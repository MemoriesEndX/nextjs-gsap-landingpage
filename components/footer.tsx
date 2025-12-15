export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">TOKO DAFA</h3>
            <p className="text-sm text-neutral-400">
              Your one-stop shop for custom PCs, tech retail, and apparel printing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>PC Assembly</li>
              <li>Retail Products</li>
              <li>Custom Apparel</li>
              <li>Tech Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>memoriesendx@gmail.com</li>
              <li>0822-1358-0380</li>
              <li>9AM-6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; 2025 Memories End XYZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

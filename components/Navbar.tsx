'use client';
import Link from 'next/link';
import {
  Home,
  Package,
  Users,
  BarChart3,
  MessageSquare,
  Bell,
  LogOut,
} from 'lucide-react';
import { useNav } from '@/context/NavContext';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function Navbar() {
  const { active, setActive } = useNav();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'programs', label: 'Programs', icon: Users, path: '/programs' },
    { id: 'suppliers', label: 'Suppliers', icon: Users, path: '/suppliers' },
    { id: 'materials', label: 'Materials', icon: Package, path: '/materials' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
    { id: 'demo', label: 'Demo', icon: MessageSquare, path: '/demo' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo + Title */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center mb-1">
              <img
                src="https://eu-images.contentstack.com/v3/assets/blt0a48a1f3edca9eb0/blt5c1cc0b2b2b995f2/658c08b5645620040b630efe/NEW_LOGO.jpg"
                alt="AbbVie Logo"
                className="h-8 w-auto object-contain align-middle inline-block"
              />
            </Link>
            <Link href="/" className="flex items-center">
              <span
                className={`text-lg font-semibold ${montserrat.className}`}
                style={{ color: 'rgb(7, 29, 73)' }}
              >
                CDMO Program Portal
              </span>
            </Link>
          </div>

          {/* Right: Nav Links + Icons */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setActive(item.id)}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  active === item.id
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.label}
              </Link>
            ))}
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Bell className="w-5 h-5" />
            </button>
            <button className="ml-4 p-2 text-gray-500 hover:text-gray-700">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

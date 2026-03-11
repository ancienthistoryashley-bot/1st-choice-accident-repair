import Link from "next/link";
import { Car, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#ff6b35] flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">1st Choice</span>
                <span className="block text-xs text-[#a1a1aa]">Accident Repair</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Your 1st CHOICE for ACCIDENT REPAIR in South Wales. Premier vehicle damage repair centre serving Cardiff and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-[#ff6b35] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-[#ff6b35] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-[#ff6b35] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-[#ff6b35] transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-white/60 hover:text-[#ff6b35] transition-colors text-sm">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-white/60 text-sm">Accident Repair</li>
              <li className="text-white/60 text-sm">Alloy Wheel Refurbishment</li>
              <li className="text-white/60 text-sm">Paintwork</li>
              <li className="text-white/60 text-sm">ADAS Calibration</li>
              <li className="text-white/60 text-sm">EV Vehicle Repairs</li>
              <li className="text-white/60 text-sm">Wheel Alignment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-[#ff6b35]" />
                <span>029 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-[#ff6b35]" />
                <span>info@1stchoiceaccidentrepair.co.uk</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-[#ff6b35]" />
                <span>Cardiff, South Wales</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-[#ff6b35]" />
                <span>Mon-Fri: 8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} 1st Choice Accident Repair Centre Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-xs">
                BS10125:2022 Approved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
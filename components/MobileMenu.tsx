'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={onToggle}
        className="inline-flex items-center justify-center p-2 rounded-md transition-colors"
        style={{ color: 'var(--discord-text-secondary)' }}
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {/* Hamburger icon */}
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu panel */}
      {isOpen && (
        <div 
          className="absolute top-16 left-0 right-0 z-50 border-b border-gray-700"
          style={{ backgroundColor: 'var(--discord-bg-tertiary)' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors"
              style={{ color: 'var(--discord-text-secondary)' }}
              onClick={onToggle}
            >
              Features
            </Link>
            <Link
              href="#commands"
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors"
              style={{ color: 'var(--discord-text-secondary)' }}
              onClick={onToggle}
            >
              Commands
            </Link>
            <Link
              href="/privacy"
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors"
              style={{ color: 'var(--discord-text-secondary)' }}
              onClick={onToggle}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors"
              style={{ color: 'var(--discord-text-secondary)' }}
              onClick={onToggle}
            >
              Terms
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

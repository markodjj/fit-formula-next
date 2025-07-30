"use client";

import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModernButton } from "@/components/shared";
import { ChevronDown, Menu, ChevronRight } from "lucide-react";
import navListData from "@/lib/nav-data";

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (itemId: number) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const NavItems = () => (
    <div className="flex items-center space-x-2">
      {navListData.map((item) => (
        <div key={item._id}>
          {item.submenu ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <ModernButton
                  variant="ghost"
                  size="default"
                  className="flex items-center gap-1 hover:bg-accent/50"
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                </ModernButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-56 p-2 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-xl"
              >
                <div className="space-y-1">
                  {item.submenu.map((subItem, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link 
                        href={subItem.path}
                        className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent/50 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={item.path}>
              <ModernButton variant="ghost" size="default">
                {item.name}
              </ModernButton>
            </Link>
          )}
        </div>
      ))}
    </div>
  );

  const MobileNavItems = () => (
    <div className="space-y-3">
      {navListData.map((item) => (
        <div key={item._id}>
          {item.submenu ? (
            <div className="space-y-2">
              <ModernButton
                variant="ghost"
                size="default"
                className="w-full justify-between hover:bg-accent/50"
                onClick={() => toggleExpanded(item._id)}
              >
                <span className="font-medium">{item.name}</span>
                <ChevronRight 
                  className={`h-4 w-4 transition-transform duration-200 ${
                    expandedItems.includes(item._id) ? 'rotate-90' : ''
                  }`}
                />
              </ModernButton>
              {expandedItems.includes(item._id) && (
                <div className="pl-4 space-y-2 border-l-2 border-l-accent/30 ml-4">
                  {item.submenu.map((subItem, index) => (
                    <Link
                      key={index}
                      href={subItem.path}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <ModernButton
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-sm hover:bg-accent/30"
                      >
                        {subItem.name}
                      </ModernButton>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link href={item.path} onClick={() => setMobileMenuOpen(false)}>
              <ModernButton
                variant="ghost"
                size="default"
                className="w-full justify-start hover:bg-accent/50"
              >
                {item.name}
              </ModernButton>
            </Link>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FF</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Fit Formula
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavItems />
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center ml-6">
            <ModernButton variant="gradient" size="sm">
              Get Started
            </ModernButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <ModernButton variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </ModernButton>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md">
                <SheetHeader className="border-b border-gray-200/50 pb-4">
                  <SheetTitle className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold text-xs">FF</span>
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      Fit Formula
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <MobileNavItems />
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200/50">
                  <ModernButton variant="gradient" size="default" className="w-full">
                    Get Started
                  </ModernButton>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
} 
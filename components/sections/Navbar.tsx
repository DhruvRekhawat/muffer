"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from "@/lib/utils"

// TypeScript interfaces for navigation items
interface NavChild {
  title: string;
  href: string;
  description: string;
}

interface NavItem {
  title: string;
  href: string;
  children?: NavChild[];
}

// Data for the navigation items
const navItems: NavItem[] = [
  {
    title: 'Product',
    href: '#',
    children: [
      { title: 'Features', href: '#', description: 'Explore our powerful features' },
      { title: 'Pricing', href: '#', description: 'Flexible plans for every need' },
      { title: 'Use Cases', href: '#', description: 'See how others succeed with Muffer' },
    ],
  },
  {
    title: 'Getting started',
    href: '#',
    children: [
      { title: 'Tutorials', href: '#', description: 'Learn step by step' },
      { title: 'Documentation', href: '#', description: 'Detailed technical guides' },
      { title: 'Examples', href: '#', description: 'Ready-to-use code samples' },
    ],
  },
  {
    title: 'Company',
    href: '#',
    children: [
      { title: 'About Us', href: '#', description: 'Our mission and values' },
      { title: 'Contact', href: '#', description: 'Get in touch with our team' },
      { title: 'Careers', href: '#', description: 'Join our growing team' },
    ],
  },
];

const MufferLogo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <span className="text-3xl font-black text-blue-500">muffer</span>
  </div>
);

interface ListItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
  children?: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-bold leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
);
ListItem.displayName = "ListItem";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY;
      
      // Determine if scrolled down past threshold
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine scroll direction
      if (scrollY > lastScrollY && scrollY > 200) {
        // Scrolling down & past threshold - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up or at top - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (title: string): void => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full",
              "bg-background/95 backdrop-blur",
              isScrolled ? "shadow-lg" : "shadow-md",
              "py-2 md:py-0",
              "rounded-3xl",
              "mx-auto",
              "max-w-3xl",
              "px-6"
            )}
          >
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <a href="#" className="flex-shrink-0">
                <MufferLogo />
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <NavigationMenu>
                  <NavigationMenuList>
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        {item.children ? (
                          <>
                            <NavigationMenuTrigger className='text-lg hover:cursor-pointer bg-transparent'>{item.title}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {item.children.map((child) => (
                                  <ListItem
                                    key={child.title}
                                    title={child.title}
                                    href={child.href}
                                  >
                                    {child.description}
                                  </ListItem>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            href={item.href}
                          >
                            {item.title}
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Actions (Login, Join Waitlist) */}
              <div className="hidden md:flex items-center gap-4">
                <Button className="rounded-xl font-bold text-white bg-black" size={"lg"}>Book A Call</Button>
              </div>

              {/* Mobile Menu Button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={toggleMobileMenu}
                  >
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[300px] bg-background">
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b border-border">
                      <MufferLogo />
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      {navItems.map((item) =>
                        item.children ? (
                          <div key={item.title}>
                            <button
                              onClick={() => toggleDropdown(item.title)}
                              className={cn(
                                "flex items-center justify-between w-full text-sm font-bold text-foreground py-2",
                                "transition-colors duration-200",
                                "hover:text-primary",
                                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                              )}
                            >
                              {item.title}
                              {openDropdown === item.title ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </button>
                            {openDropdown === item.title && (
                              <div className="ml-4 space-y-2 mt-2">
                                {item.children.map((child) => (
                                  <div key={child.title} className="border-l-2 border-muted pl-4">
                                    <a
                                      href={child.href}
                                      className="block px-2 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-200"
                                    >
                                      <div className="font-bold">{child.title}</div>
                                      <div className="text-xs text-muted-foreground mt-1">{child.description}</div>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a
                            key={item.title}
                            href={item.href}
                            className="block py-2 text-sm font-bold text-foreground hover:text-primary transition-colors duration-200"
                          >
                            {item.title}
                          </a>
                        )
                      )}
                    </div>
                    <div className="mt-auto p-4 border-t border-border space-y-4">
                      <a href="#" className="block py-2 text-sm font-bold text-foreground hover:text-primary transition-colors duration-200">
                        Login
                      </a>
                      <Button className="w-full rounded-full">Join Waitlist</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
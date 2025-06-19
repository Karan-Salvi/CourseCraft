import React, { useEffect, useState } from "react";
import { Menu, X, BookOpen, ArrowRight } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import DarkMode from "@/DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "User log out.");
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CourseCraft</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-8">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar>
                      <AvatarImage
                        src={user?.photoUrl || "https://github.com/shadcn.png"}
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link to="my-learning">My learning</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        {" "}
                        <Link to="profile">Edit Profile</Link>{" "}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={logoutHandler}>
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    {user?.role === "instructor" && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link to="/admin/dashboard">Dashboard</Link>
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </button>
                </div>
              )}
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src={user?.photoUrl || "https://github.com/shadcn.png"}
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link to="my-learning">My learning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {" "}
                      <Link to="profile">Edit Profile</Link>{" "}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logoutHandler}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  {user?.role === "instructor" && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link to="/admin/dashboard">Dashboard</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </button>
              </div>
            )}

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                {/* <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">
                  Sign In
                </button> */}

                <button className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 rounded-lg font-medium text-center">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

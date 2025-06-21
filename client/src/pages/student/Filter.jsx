import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

// const categories = [
//   { id: "nextjs", label: "Next JS" },
//   { id: "data science", label: "Data Science" },
//   { id: "frontend development", label: "Frontend Development" },
//   { id: "fullstack development", label: "Fullstack Development" },
//   { id: "mern stack development", label: "MERN Stack Development" },
//   { id: "backend development", label: "Backend Development" },
//   { id: "javascript", label: "Javascript" },
//   { id: "python", label: "Python" },
//   { id: "docker", label: "Docker" },
//   { id: "mongodb", label: "MongoDB" },
//   { id: "html", label: "HTML" },
// ];

// const Filter = ({ handleFilterChange }) => {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [sortByPrice, setSortByPrice] = useState("");

//   const handleCategoryChange = (categoryId) => {
//     setSelectedCategories((prevCategories) => {
//       const newCategories = prevCategories.includes(categoryId)
//         ? prevCategories.filter((id) => id !== categoryId)
//         : [...prevCategories, categoryId];

//         handleFilterChange(newCategories, sortByPrice);
//         return newCategories;
//     });
//   };

//   const selectByPriceHandler = (selectedValue) => {
//     setSortByPrice(selectedValue);
//     handleFilterChange(selectedCategories, selectedValue);
//   }
//   return (
//     <div className="w-full md:w-[25%] bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
//       <div className="flex items-center justify-between">
//         <h1 className="font-semibold text-lg md:text-sm text-nowrap mr-2">Filter Options</h1>
//         <Select onValueChange={selectByPriceHandler}>
//           <SelectTrigger>
//             <SelectValue placeholder="Sort by" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               <SelectLabel>Sort by price</SelectLabel>
//               <SelectItem value="low">Low to High</SelectItem>
//               <SelectItem value="high">High to Low</SelectItem>
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//       </div>
//       <Separator className="my-4" />
//       <div>
//         <h1 className="font-semibold mb-2">CATEGORY</h1>
//         {categories.map((category) => (
//           <div className="flex items-center space-x-2 my-2">
//             <Checkbox
//               id={category.id}
//               className="w-4 h-4 peer rounded-sm border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:ring-2"
//               onCheckedChange={() => handleCategoryChange(category.id)}
//             />
//             <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
//               {category.label}
//             </Label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filter;

("use client");

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const categories = [
  { id: "next", label: "Next JS" },
  { id: "data science", label: "Data Science" },
  { id: "frontend development", label: "Frontend Development" },
  { id: "fullstack development", label: "Fullstack Development" },
  { id: "mern stack development", label: "MERN Stack Development" },
  { id: "backend development", label: "Backend Development" },
  { id: "javascript", label: "Javascript" },
  { id: "python", label: "Python" },
  { id: "docker", label: "Docker" },
  { id: "mongodb", label: "MongoDB" },
  { id: "html", label: "HTML" },
];

const Filter = ({
  setSearch,
  setSortByPrice,
  setSelectedCatgories,
  selectedCategories,
}) => {
  const selectByPriceHandler = (selectedValue) => {
    setSortByPrice(selectedValue);
  };
  return (
    <div className="max-w-7xl mx-auto flex gap-4 w-full items-center justify-end py-6">
      <Input
        type="text"
        placeholder="Search the course.."
        className="w-[250px]"
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(e.target.value);
        }}
      />
      <Button type="button">Search</Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            Filter by type <ChevronDown size={16} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48">
          <div className="flex flex-col space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => {
                    setSelectedCatgories((prev) => {
                      if (prev.includes(category.id)) {
                        return prev.filter((id) => id !== category.id);
                      } else {
                        return [...prev, category.id];
                      }
                    });
                  }}
                />
                <Label htmlFor={category.id}>{category.label}</Label>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      <div className="max-w-xs ">
        <Select onValueChange={selectByPriceHandler}>
          {/* <Select onValueChange={selectByPriceHandler}></Select> */}
          <SelectTrigger className={"w-full"}>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort by price</SelectLabel>
              <SelectItem value="low">Low to High</SelectItem>
              <SelectItem value="high">High to Low</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* <Button variant="outline">Change timezone</Button> */}
    </div>
  );
};

export default Filter;

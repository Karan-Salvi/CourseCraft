// import { Skeleton } from "@/components/ui/skeleton";
// import React from "react";
// import Course from "./Course";
// import { useGetPublishedCourseQuery } from "@/features/api/courseApi";

// const Courses = ({ search, category, sortBy }) => {
//   const { data, isLoading, isError } = useGetPublishedCourseQuery();

//   if (isError) return <h1>Some error occurred while fetching courses.</h1>;

//   console.log("Courses data:", data);

//   let courses = data?.courses || [];

//   console.log("Courses Catogories are in componenets :", courses);

//   const filteredCourses =
//     search || category
//       ? courses.filter(
//           (course) =>
//             (search?.toLowerCase() &&
//               course.courseTitle
//                 ?.toLowerCase()
//                 ?.includes(search.toLowerCase())) ||
//             (Array.isArray(category) &&
//               category.length > 0 &&
//               category.some((cat) =>
//                 course.category?.toLowerCase()?.includes(cat.toLowerCase())
//               )) ||
//             (course.creator &&
//               course.creator.name &&
//               course.creator.name.toLowerCase().includes(search?.toLowerCase()))
//         )
//       : courses;

//   let sortedCourses;

//   if (sortBy === "low") {
//     sortedCourses = [...filteredCourses].sort(
//       (a, b) => a.coursePrice - b.coursePrice
//     );
//     // use sortedCourses instead of filteredCourses
//   } else if (sortBy === "high") {
//     sortedCourses = [...filteredCourses].sort(
//       (a, b) => b.coursePrice - a.coursePrice
//     );
//     // use sortedCourses instead of filteredCourses
//   } else {
//     sortedCourses = [...filteredCourses];
//   }

//   return (
//     <div className="">
//       <div className="max-w-7xl mx-auto p-6">
//         {/* <h2 className="font-bold text-3xl text-center mb-10">Our Courses</h2> */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {isLoading ? (
//             Array.from({ length: 8 }).map((_, index) => (
//               <CourseSkeleton key={index} />
//             ))
//           ) : sortedCourses.length > 0 ? (
//             sortedCourses.map((course, index) => (
//               <Course key={index} course={course} />
//             ))
//           ) : (
//             <p className="text-center text-2xl">Course not found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;

// const CourseSkeleton = () => {
//   return (
//     <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
//       <Skeleton className="w-full h-36" />
//       <div className="px-5 py-4 space-y-3">
//         <Skeleton className="h-6 w-3/4" />
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <Skeleton className="h-6 w-6 rounded-full" />
//             <Skeleton className="h-4 w-20" />
//           </div>
//           <Skeleton className="h-4 w-16" />
//         </div>
//         <Skeleton className="h-4 w-1/4" />
//       </div>
//     </div>
//   );
// };

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Course from "./Course";
import { useGetPublishedCourseQuery } from "@/features/api/courseApi";
import { CourseNotFound } from "./SearchPage";

const Courses = ({ search, category, sortBy }) => {
  const { data, isLoading, isError } = useGetPublishedCourseQuery();

  if (isError) return <h1>Some error occurred while fetching courses.</h1>;

  let courses = data?.courses || [];

  console.log("Courses received:", courses);
  console.log("Selected search:", search);
  console.log("Selected categories:", category);

  // Step 1: Apply search filter
  let filteredCourses = [...courses];
  if (search?.trim()) {
    const searchTerm = search.toLowerCase();
    filteredCourses = filteredCourses.filter(
      (course) =>
        course.courseTitle?.toLowerCase().includes(searchTerm) ||
        course.creator?.name?.toLowerCase().includes(searchTerm)
    );
  }

  // Step 2: Apply category filter
  if (Array.isArray(category) && category.length > 0) {
    filteredCourses = filteredCourses.filter((course) =>
      category.some((cat) =>
        course.category?.toLowerCase().includes(cat.toLowerCase())
      )
    );
  }

  // Step 3: Sort courses
  let sortedCourses = [...filteredCourses];
  if (sortBy === "low") {
    sortedCourses.sort((a, b) => a.coursePrice - b.coursePrice);
  } else if (sortBy === "high") {
    sortedCourses.sort((a, b) => b.coursePrice - a.coursePrice);
  }

  return (
    <div className="">
      <div className="max-w-7xl mx-auto p-6">
        {sortedCourses.length == 0 && !isLoading ? (
          <CourseNotFound />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <CourseSkeleton key={index} />
              ))
            ) : sortedCourses.length > 0 ? (
              sortedCourses.map((course, index) => (
                <Course key={index} course={course} />
              ))
            ) : (
              <CourseNotFound />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;

// Skeleton Loader Component
const CourseSkeleton = () => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
      <Skeleton className="w-full h-36" />
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};

// src/components/UserProfile.jsx
import React from 'react';

/* --- Original (non-responsive) version --- */
function UserProfileBasic() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User avatar of John Doe"
        className="rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="text-xl text-blue-800 my-4 text-center">John Doe</h1>
      <p className="text-gray-600 text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

/* --- Responsive version --- */
function UserProfileResponsive() {
  return (
    <div
      className="
        bg-gray-100
        p-4 sm:p-4 md:p-8
        max-w-xs sm:max-w-xs md:max-w-sm
        mx-auto my-10
        rounded-lg shadow-lg
        text-center
      "
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User avatar of John Doe"
        className="
          rounded-full
          mx-auto
          w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36
        "
      />
      <h1
        className="
          text-lg sm:text-lg md:text-xl
          text-blue-800
          my-4
        "
      >
        John Doe
      </h1>
      <p
        className="
          text-sm sm:text-sm md:text-base
          text-gray-600
        "
      >
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

/* --- Interactive version with hover, transitions, animations --- */
function UserProfileInteractive() {
  return (
    <div
      className="
        bg-gray-100
        p-4 sm:p-4 md:p-8
        max-w-xs sm:max-w-xs md:max-w-sm
        mx-auto my-10
        rounded-lg shadow-lg
        text-center
        transition-shadow duration-300 ease-in-out
        hover:shadow-xl
      "
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User avatar of John Doe"
        className="
          rounded-full
          mx-auto
          w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36
          transition-transform duration-300 ease-in-out
          hover:scale-110
        "
      />
      <h1
        className="
          text-lg sm:text-lg md:text-xl
          text-blue-800
          my-4
          transition-colors duration-300 ease-in-out
          hover:text-blue-500
        "
      >
        John Doe
      </h1>
      <p
        className="
          text-sm sm:text-sm md:text-base
          text-gray-600
        "
      >
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

/* --- Export all three versions --- */
export { UserProfileBasic, UserProfileResponsive, UserProfileInteractive };
export default UserProfileInteractive;
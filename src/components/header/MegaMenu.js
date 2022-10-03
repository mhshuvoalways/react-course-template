import React, { useState } from "react";

const MegaMenu = () => {
  const mainMenu = [
    {
      name: "Development",
      subMenu: [
        {
          name: "Desktop Development",
          subSubMenu: [
            {
              name: "Business",
            },
            {
              name: "Freelancing and Accouting",
            },
            {
              name: "IT & Software",
            },

            {
              name: "Office Productivity",
            },
          ],
        },
        {
          name: "Office Productivity",
          subSubMenu: [
            {
              name: "Business",
            },
            {
              name: "Office Productivit",
            },
            {
              name: "IT & Software",
            },

            {
              name: "Course Productivity",
            },
          ],
        },
        {
          name: "Freelancing and Accouting",
          subSubMenu: [
            {
              name: "Office Productivity",
            },
            {
              name: "Test and Accouting",
            },
            {
              name: "IT & Software",
            },

            {
              name: "Prduct",
            },
          ],
        },
      ],
    },
    {
      name: "Freelancing and Accouting",
      subMenu: [
        {
          name: "Freelancing and Software",
          subSubMenu: [
            {
              name: "Business",
            },
            {
              name: "Freelancing and Accouting",
            },
            {
              name: "IT & Software",
            },

            {
              name: "Office Productivity",
            },
          ],
        },
        {
          name: "Productivity",
          subSubMenu: [
            {
              name: "Business",
            },
            {
              name: "Office Productivit",
            },
            {
              name: "IT & Software",
            },

            {
              name: "Course Productivity",
            },
          ],
        },
        {
          name: "Freelancing",
          subSubMenu: [
            {
              name: "Office Productivity",
            },
            {
              name: "Test and Accouting",
            },
            {
              name: "IT & Software",
            },

            {
              name: "Prduct",
            },
          ],
        },
      ],
    },
    {
      name: "Productivity",
      subMenu: [
        {
          name: "IT & Software",
          subSubMenu: [
            {
              name: "Business",
            },
            {
              name: "Freelancing and Accouting",
            },
            {
              name: "IT & Software",
            },

            {
              name: "Office Productivity",
            },
          ],
        },
        {
          name: "Product Productivity",
          subSubMenu: [
            {
              name: "Business",
            },
            {
              name: "Office Productivit",
            },
            {
              name: "IT & Software",
            },

            {
              name: "Course Productivity",
            },
          ],
        },
        {
          name: "Accouting",
          subSubMenu: [
            {
              name: "Office Productivity",
            },
            {
              name: "Test and Accouting",
            },
            {
              name: "IT & Software",
            },

            {
              name: "Prduct",
            },
          ],
        },
      ],
    },
    {
      name: "IT & Software",
      subMenu: [
        {
          name: "Mobile development",
          subSubMenu: [
            {
              name: "Business",
            },
            {
              name: "Freelancing and Accouting",
            },
            {
              name: "IT & Software",
            },

            {
              name: "Office Productivity",
            },
          ],
        },
        {
          name: "IT & Software",
          subSubMenu: [
            {
              name: "Business",
            },
            {
              name: "Office Productivit",
            },
            {
              name: "IT & Software",
            },

            {
              name: "Course Productivity",
            },
          ],
        },
        {
          name: "Product",
          subSubMenu: [
            {
              name: "Office Productivity",
            },
            {
              name: "Test and Accouting",
            },
            {
              name: "IT & Software",
            },

            {
              name: "Prduct",
            },
          ],
        },
      ],
    },
  ];
  const [subMenu, setsubMenu] = useState(null);
  const [subSubMenu, setSubSubMenu] = useState(null);

  return (
    <div className="absolute sm:left-32 left-0">
      <div className="w-full m-auto flex flex-wrap">
        <div className="p-5 border shadow-md text-gray-600 space-y-5 h-full sm:h-screen bg-white z-20">
          {mainMenu.length &&
            mainMenu.map((el) => (
              <div
                key={el.name}
                className="flex items-center gap-10 justify-between hover:color1-text cursor-pointer text-sm"
                onMouseEnter={() => {
                  setsubMenu(el);
                  setSubSubMenu(null);
                }}
              >
                <p>{el.name}</p>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            ))}
        </div>
        {subMenu && (
          <div className="p-5 border shadow-md text-gray-600 space-y-5 h-full sm:h-screen bg-white z-20">
            {subMenu.subMenu.map((el) => (
              <div
                key={el.name}
                className="flex items-center gap-10 justify-between hover:color1-text cursor-pointer text-sm"
                onMouseEnter={() => setSubSubMenu(el)}
              >
                <p>{el.name}</p>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            ))}
          </div>
        )}
        {subSubMenu && (
          <div className="p-5 border shadow-md text-gray-600 space-y-5 h-full sm:h-screen bg-white z-20">
            {subSubMenu.subSubMenu.map((el) => (
              <div
                className="flex items-center gap-10 justify-between hover:color1-text cursor-pointer text-sm"
                key={el.name}
              >
                <p>{el.name}</p>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;

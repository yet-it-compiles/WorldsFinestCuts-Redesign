/**
 * Represents the page links for the application
 */
export const PAGE_LINKS = [
    { name: "About Us", path: "/" },
    { name: "Explore Menu", path: "/" },
    { name: "Contact", path: "/" },
];

/**
 * Represents the account links / user action and account links for the application
 */
export const ACCOUNT_LINKS = [
    { name: "Login", path: "/" },
    { name: "Cart", path: "/" },
];

/**
 * Defines the various types of products WFC sells
 */
export const PRODUCT_TYPES = [
    { type: "beef", label: "Premium Beef" },
    { type: "chicken", label: "All Natural Chicken Breast" },
    { type: "seafood", label: "Pacific Wild Caught Seafood" },
    { type: "pork", label: "Cage Free Pork" },
];

/**
 * Defines the featured items for this month
 */
export const FEATURED_ITEMS = [
    {
        title: "Aspiring Chef's Gourmet Selection",
        description: "A Prime Cut Collection for the Aspiring Chef",
        extended:
            "Curated for the rising culinary star, this premier selection is your stepping stone to masterful cooking. Each cut, from the robust Ribeyes to the savory Sirloins, promises to elevate your dishes to professional quality.",
        contents: [
            "4 x Ribeye Steaks (12 oz each)",
            "4 x New York Strip Steaks (12 oz each)",
            "7 x New York Strip Steaks (6 oz each)",
            "16 x Baseball Cut Filets (8 oz each)",
            "32 x Pub Style Burgers (6 oz each)",
            "8 x Fajita Cut Sirloins (6 oz each)",
        ],
        image: "",
        price: "$559.99",
        value: "$614.98",
    },
    {
        title: "Deluxe Family Grillfest Pack",
        description: "A Deluxe Assortment for Months of Memorable Meals",
        extended:
            "Transform your family dinners into a gourmet experience with this lavish assortment. From succulent Ribeyes to tender Baseball Filets, enjoy a variety of premium cuts that ensure a memorable feast for months.",
        contents: [
            "8 x Ribeye Steaks (12 oz each)",
            "8 x New York Strip Steaks (12 oz each)",
            "14 x New York Strip Steaks (6 oz each)",
            "16 x Baseball Cut Filets (8 oz each)",
            "32 x Pub Style Burgers (6 oz each)",
            "8 x Fajita Cut Sirloins (6 oz each)",
        ],
        image: "",
        price: "$1,179.99",
        value: "$1,238.98",
    },

    {
        title: "Culinary Enthusiast's Grill Trove",
        description: "An Extended Variety for the Culinary Enthusiast",
        extended:
            "Embrace the grill master within with an expansive array of choice cuts. This collection is designed for those who savor variety and relish in the art of grilling, offering everything from thick Ribeyes to plump Pub Style Burgers.",
        contents: [
            "12 x Ribeye Steaks (12 oz each)",
            "12 x New York Strip Steaks (12 oz each)",
            "16 x New York Strip Steaks (6 oz each)",
            "24 x Baseball Cut Filets (8 oz each)",
            "32 x Pub Style Burgers (6 oz each)",
            "8 x Fajita Cut Sirloins (6 oz each)",
        ],
        image: "",
        price: "$1,731.99",
        value: "$1,819.98",
    },

    {
        title: "Grill Master's Ultimate Reserve",
        description: "The Ultimate Carnivore's Year-Round Reserve",
        extended:
            "Elevate your grilling game with this exceptional collection, a treasure trove for the true carnivore. Offering a year-round supply of gourmet cuts, it's a pledge to luxury and flavor that satisfies the most demanding palates.",
        contents: [
            "20 x Ribeye Steaks (12 oz each)",
            "20 x New York Strip Steaks (12 oz each)",
            "35 x New York Strip Steaks (6 oz each)",
            "40 x Baseball Cut Filets (8 oz each)",
            "64 x Pub Style Burgers (6 oz each)",
            "40 x Fajita Cut Sirloins (6 oz each)",
        ],
        image: "",
        price: "$2,849.99",
        value: "$2,993.98",
    },
];

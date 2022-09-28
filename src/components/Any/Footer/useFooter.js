export const useFooter = () => {
  const allProductsArr = [
    { text: "Phones", href: "/" },
    { text: "Watch", href: "/" },
    { text: "Tablet", href: "/" },
    { text: "Laptops", href: "/" },
  ];
  const companyArr = [
    { text: "About", href: "/about" },
    { text: "Support", href: "/" },
  ];
  const supportArr = [
    { text: "Style Guide", href: "/" },
    { text: "Licensing", href: "/" },
    { text: "Change Log", href: "/" },
    { text: "Contact", href: "/" },
  ];

  const socialArr = [
    { text: "Instagram", href: "/" },
    { text: "Facebook", href: "/" },
    { text: "LinkedIn", href: "/" },
    { text: "Youtube", href: "/" },
  ];
  return { allProductsArr, companyArr, supportArr, socialArr };
};

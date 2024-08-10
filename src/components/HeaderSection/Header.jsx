import React, { useState } from "react";
import { useAppContext } from "../../useContextHook/useContextApi";
import { useTheme } from "../../useContextHook/useTheme";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState();
  const { loading, mobileMenu, setMobileMenu } = useAppContext();
  const { isDarkMode, toggleTheme } = useTheme();

  return <div>Header</div>;
};

export default Header;

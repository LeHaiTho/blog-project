import {
  Button,
  Dropdown,
  DropdownDivider,
  Navbar,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Avatar } from "flowbite-react";
function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center text-sm font-semibold whitespace-nowrap sm:text-xl dark:text-white"
      >
        <span className="px-2 py-1 text-white bg-pink-600 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500">
          HaiTho&#39;s
        </span>
        Blog
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={CiSearch}
          className="hidden lg:inline"
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <CiSearch />
      </Button>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <div className="flex gap-2">
        <Button className="hidden w-12 h-10 sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
            size={"xs"}
            label={
              <Avatar
                img={currentUser.photoUrl}
                alt={currentUser.username}
                size="sm"
                rounded
              />
            }
            inline
            arrowIcon={false}
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm truncate font-medium">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <DropdownDivider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

export default Header;

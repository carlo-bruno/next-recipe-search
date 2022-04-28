import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </li>

        <li>
          <Link href="/recipe/random">
            <a>Random</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

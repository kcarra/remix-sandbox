import { Link } from "@remix-run/react";

export default function IndexComponent() {
  return (
    <>
      <div>Hello world</div>
      <Link to="people">People</Link>
    </>
  );
}

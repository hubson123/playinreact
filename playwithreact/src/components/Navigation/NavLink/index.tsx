import { Link } from "../Navigation.css";

interface Props {
  to: string;
  title: string;
}
const NavLink = (props: Props) => {
  return <Link href={props.to}>{props.title}</Link>;
};
export default NavLink;

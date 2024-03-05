import "./Header.css"
import { Menu } from "./Menu/Menu";
import { Icons } from "./Icons/Icons";
import { Button } from "../Button/Button";
import { Photos } from "../Photos";

export const Header = () => {
  return (
    <div className="header">
      <img className="bars" src={Photos.bars} />
      <img className="logo" src={Photos.logo} alt="Logo da Salesforce" />
      <Menu />
      <Icons />
      <Button variant="green">Teste grátis</Button>
    </div>
  )
}
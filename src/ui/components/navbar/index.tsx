import { Button } from "@/ui/components/button"
import { Logo } from "@/ui/components/logo"
import { Field } from "@/ui/components/field"
import { Search } from "../icons"
import * as S from "./styles"

export default function Navbar() {
  return (
    <S.Wrapper>
      <Logo />
      <Field
        placeholder="Pesquisar"
        width={400}
        startElement={
          <span className="icon-search">
            <Search />
          </span>
        }
      />
      <Button size="small">Login</Button>
    </S.Wrapper>
  )
}

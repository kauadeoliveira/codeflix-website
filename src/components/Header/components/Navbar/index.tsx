import { CategoriesMenu } from "./components/CategoriesMenu";
import { NavItem } from "./components/NavItem";

// Componente de Navbar apenas para janelas de tamanho Tablet e Desktop.

export const Navbar = () => (
    <nav className="hidden md:flex gap-10 text-lg">
        <NavItem href="/movies">Filmes</NavItem>
        <NavItem href="/tvseries">Series</NavItem>
        <NavItem href="/mylist">Minha Lista</NavItem>

        {/* Menu que lista todos os generos disponiveis. (DESKTOP) */}
        <CategoriesMenu />
    </nav>
)
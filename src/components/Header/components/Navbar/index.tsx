import { CategoriesMenu } from "./components/CategoriesMenu";
import { NavItem } from "./components/NavItem";

// Componente de Navbar apenas para janelas de tamanho Tablet e Desktop.

export const Navbar = () => (
    <nav className="hidden md:flex gap-10 text-lg">
        <NavItem href="/filmes">Filmes</NavItem>
        <NavItem href="/series">Series</NavItem>
        <NavItem href="/minha-lista">Minha Lista</NavItem>

        {/* Menu que lista todos os generos disponiveis. (DESKTOP) */}
        <CategoriesMenu />
    </nav>
)
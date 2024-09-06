import NavList from "./NavList"

const Header = () => {
    return (
        <header>
        <div class="brand-logo">
            <a href=""><img class="logo" src="https://npngtech.in/assets/large-DIFPjkXK.png" alt="npng-logo" /><h1 class="brand-name">NPNG Tech</h1></a>
        </div>
        
        <nav>
            <NavList />
        </nav>
        <button type="button">Sign Up</button>
    </header>
    )
}

export default Header
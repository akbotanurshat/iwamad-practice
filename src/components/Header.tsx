type HeaderProps = {
    name: string;
    role: string;
};

function Header({ name,role}: HeaderProps){
    return (
        <header>
            <h1>{name}</h1>
            <p>{role}</p>
        </header>
    );
}

export default Header;
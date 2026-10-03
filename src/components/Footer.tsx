type FooterProps = {
    email: string;
};

function Footer({email}: FooterProps) {
    return (
        <footer>
            <p>
             Contact: <a href={'mailto:${email}'}>{email}</a>

            </p>
        </footer>
    );
}

export default Footer;
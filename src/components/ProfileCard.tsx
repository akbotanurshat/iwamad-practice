type ProfileCardProps = {
    name: string;
    role: string;
    avatarUrl?: string;
};

function ProfileCard({name,role,avatarUrl }: ProfileCardProps) {
    return (
        <section className="card">
            {avatarUrl && <img src={avatarUrl} alt={name} />}
            <div>
            <h2>{name}</h2>
            <p>{role}</p>
            </div>
        </section>
    );
}

export default ProfileCard;
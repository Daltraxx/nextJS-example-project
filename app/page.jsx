import LikeButton from "./like-button";

function Header({ title }) {
    return <h1>{title || 'Default title'}</h1>;
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <section>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => <li key={name}>{name}</li>)}
            </ul>
            <LikeButton />
        </section>
    );
}

export default HomePage;
import { Link } from "wouter-preact";

export default function NewRecipe() {
    return (
        <section style={{ marginBottom: '96px', padding: '1rem' }}>
            <Link href='/'>Back</Link>

            <h1 style={{ margin: '10px 0 8px', fontSize: 30, lineHeight: 1.05, fontWeight: 700 }}>Add your own recipe</h1>
        </section>
    )
}

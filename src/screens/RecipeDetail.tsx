import { Link } from "wouter-preact";

export default function RecipeDetail() {
    return (
        <section style={{ marginBottom: '96px', padding: '1rem' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href='/'>Back</Link>
                <button>Saved</button>
            </div>

            <h1 style={{ margin: '10px 0 8px', fontSize: 30, lineHeight: 1.05, fontWeight: 700 }}>Recipe Name</h1>
            <div style={{ fontSize: 15, lineHeight: 1.4 }}>Description</div>
        </section>
    )
}

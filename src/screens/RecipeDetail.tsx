import { Link } from "wouter-preact";
import { useParams } from "wouter-preact";
import { useApp } from "../data/app";
import Stepper from "../components/Stepper";
import { useState } from "preact/hooks";
import { format, scaled, limitServings } from "../lib/scale";
import { BackIcon, HeartIcon } from "../components/Icons";

export default function RecipeDetail() {
    const { id } = useParams<{ id: string }>();
    const { state, actions } = useApp();
    const recipe = state.recipes.find((r) => r.id === id);
    const isFav = !!state.favs[id];

    const [servings, setServings] = useState(recipe ? recipe.base : 1);

    const handleDec = () => {
        setServings(limitServings(servings - 1));
    };

    const handleInc = () => {
        setServings(limitServings(servings + 1));
    };

    return (
        <section style={{ marginBottom: '96px', padding: '1rem' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href='/' style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Back to menu">
                    <BackIcon size={24} color={'var(--cobalt)'} />
                </Link>
                <button
                    onClick={() => actions.toggleFav(id)}
                    aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
                    aria-pressed={isFav}
                    style={{
                        width: 44,
                        height: 44,
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        padding: '0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <HeartIcon size={24} filled={isFav} color={'var(--cobalt)'} />
                </button>
            </div>

            {recipe ? (
                <>
                    <h1 style={{ margin: '10px 0 8px', fontSize: 30, lineHeight: 1.05, fontWeight: 700 }}>{recipe.name}</h1>
                    <div style={{ fontSize: 15, lineHeight: 1.4 }}>{recipe.description}</div>

                    <Stepper value={servings} onDec={handleDec} onInc={handleInc} decLabel="Decrease" incLabel="Increase" />

                    <div style={{ marginTop: 20 }}>
                        <p>{recipe.kcal} kcal/serving</p>

                        <h2>Ingredients</h2>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    <p>{ingredient.name}</p>
                                    <p>{format(scaled(ingredient.amount, recipe.base, servings))} {ingredient.unit}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <p>Recipe not found.</p>
            )}
        </section>
    )
}

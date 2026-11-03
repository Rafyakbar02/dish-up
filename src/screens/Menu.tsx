import '../styles/menu.css'
import '../index.css';
import { Link } from 'wouter-preact';
import Accordion from '../components/Accordion';
import { useState } from 'preact/hooks';
import { useApp } from '../data/app';
import { BagIcon } from '../components/Icons';

export default function Menu() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index: any) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    const { state } = useApp();

    return (
        <section>
            <div class="menu-header">
                <p>Hello, chef!</p>

                <div class="button-group">
                    <Link class="link-button" href="/recipe/new" aria-label="Add new recipe">+ Recipe</Link>
                    <Link href="/list" class="list-button" aria-label="Open grocery list">
                        <BagIcon size={16} color={'var(--cobalt)'} />
                    </Link>
                </div>
            </div>

            <h2 class="hand" style={{
                lineHeight: 0,
            }}>today's</h2>
            <h1 style={{
                fontSize: '4em',
                lineHeight: 0,
            }}>MENU</h1>

            <div class="filter-group">
                <button class="filter-button">All</button>
                <button class="filter-button">Saved</button>
            </div>

            <div class="menu-group">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    borderBottom: '2px solid var(--cobalt)',
                }}>
                    <h2 class="hand" style={{
                        lineHeight: '0',
                    }}>Quick Meals</h2>

                    <p>ready in a flash</p>
                </div>

                {state.recipes.map((item, i) => {
                    return (
                        <Accordion
                            item={item}
                            onToggle={() => handleToggle(i)}
                            isOpen={i === openIndex}
                            isFav={!!state.favs[item.id]}
                        />
                    )
                })}
            </div>
        </section>
    )
}

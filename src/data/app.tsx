import { createContext } from 'preact';
import { useContext, useReducer, useMemo } from 'preact/hooks';
import type { Recipe } from '../types';
import { seedRecipes } from './seed';

export type AppState = {
    recipes: Recipe[];
    favs: Record<string, true>;
};

const initial: AppState = {
    recipes: seedRecipes,
    favs: { r2: true, r4: true },
}

type Action = { type: 'toggleFav'; id: string };

function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'toggleFav': {
            const favs = { ...state.favs };
            if (favs[action.id]) {
                delete favs[action.id];
            } else {
                favs[action.id] = true;
            }
            return { ...state, favs };
        }
        default:
            return state;
    }
}

function makeActions(dispatch: (action: Action) => void) {
    return {
        toggleFav: (id: string) => dispatch({ type: 'toggleFav', id }),
    };
}

const Ctx = createContext<{ state: AppState; actions: ReturnType<typeof makeActions> } | null>(null);

export function AppProvider({ children }: { children: preact.ComponentChildren }) {
    const [state, dispatch] = useReducer(reducer, initial);
    const actions = useMemo(() => makeActions(dispatch), [dispatch]);

    return (
        <Ctx.Provider value={{ state, actions }}>
            {children}
        </Ctx.Provider>
    );
}

export const useApp = () => {
    const ctx = useContext(Ctx);

    if (!ctx) {
        throw new Error('useApp must be used within an AppProvider');
    }

    return ctx;
};
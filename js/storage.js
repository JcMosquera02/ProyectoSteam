const CLAVES = { FAV: 'me_fav', HIST: 'me_hist', PP: 'me_pp' };

const leer = (k, d) => {
    try {
        const v = localStorage.getItem(k);
        return v ? JSON.parse(v) : d;
    } catch { return d; }
};

const guardar = (k, v) => {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch { }
};
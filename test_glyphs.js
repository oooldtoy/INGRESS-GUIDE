const fs = require('fs');
const glyphs = JSON.parse(fs.readFileSync('src/assets/Glyph/glyphs.json', 'utf8'));

const getSegments = (pointsStr) => {
    const segs = new Set();
    for (let i = 0; i < pointsStr.length - 1; i++) {
        const p1 = pointsStr[i];
        const p2 = pointsStr[i + 1];
        segs.add(p1 < p2 ? p1 + p2 : p2 + p1);
    }
    return Array.from(segs).sort().join(',');
}

const map = {};
let collision = false;
for (const g of glyphs) {
    const key = getSegments(g.points);
    if (map[key]) {
        console.log('Collision!', map[key].name, g.name, key);
        collision = true;
    }
    map[key] = g;
}
if (!collision) console.log('No collisions found. Edges uniquely identify glyphs.');

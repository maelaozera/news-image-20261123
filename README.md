[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/maelaozera/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/maelaozera/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

# News Image — Monday 23 November 2026

A make.fun entry for the `news-image-20261123` competition: one image that
sums up the world news of Monday 23 November 2026.

## The image

A newspaper front page in flat vector style. The masthead names the day,
**MONDAY 23 NOVEMBER 2026**, and the lead story is the collapse of COP31 in
Antalya, Turkey — no deal, with the final draft not even mentioning fossil
fuels. Four more stories run below it:

- **Iran strikes US base in Bahrain** — the Iran–US war widens as Iranian
  missiles and drones hit a US base in Bahrain, while Houthi missiles are
  fired at western Saudi Arabia.
- **Kyiv drone strike: 14 missing** — a Russian drone hits a building in the
  Kyiv region; at least 14 people are missing.
- **Indonesia factory fire: 50 missing** — seven body bags found after a
  factory fire in Indonesia, 50 workers missing.
- **Democrats win 258 House seats** — Democrats secure at least 258 seats in
  the US House, their largest majority since 1992.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). The run is fully
deterministic: two runs produce byte-identical output.

## Files

- `main.ts` — the entry program
- `entry.png` — the image, 1024×1024 PNG, under 1 MiB
- `LICENSE` — MIT

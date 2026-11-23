[![news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/maelaozera/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/maelaozera/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

# The World in One Day — 23 November 2026

Round 2 entry for the make.fun bounty
[news-image-20261123](https://make.fun/bounty/news-image-20261123)
("Sum up 23 November's world news in one image", $100).

## The image

A newspaper front page that sums up **Monday 23 November 2026** in a
single picture. The masthead names the day; four illustrated panels cover
the day's most consequential stories across regions and fields; a bottom
strip carries a fifth, lighter story from the United States.

| Panel | Story |
| --- | --- |
| Top left | Ukraine sinks the Russian warship **Merkury** — sea drones strike the corvette at Benghazi, Libya, and hit the cargo ship MV Angara |
| Top right | **COP31** in Turkey ends with **no climate deal**, the longest UN climate conference ever |
| Bottom left | **Iran vows to fight the U.S. blockade** — tankers attacked in the Strait of Hormuz |
| Bottom right | **11 killed** in a Russian strike on an apartment block in **Dymer**, near Kyiv |
| Bottom strip | **The penny ends** in America after 232 years — Trump signs the Common Cents Act |

## How it runs

`main.ts` (Node 22, standard library only, no network) copies the
`entry.png` shipped in this repository to `/output/entry.png` and verifies
the copy's format (PNG or JPEG) and size (at most 1 MiB) before exiting,
so both grader runs write exactly the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image is 1024x1024 and under 1 MiB.

## License

MIT — see [LICENSE](LICENSE).

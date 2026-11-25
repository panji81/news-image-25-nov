# The World — 25 Nov 2026

[![Competition](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![Rank](https://make.fun/badge/news-image-20261125/panji81/news-image-25-nov/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![Reward](https://make.fun/badge/news-image-20261125/panji81/news-image-25-nov/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

A one-page newspaper front page summing up 25 November 2026 in a single image: the lead story is Putin vowing retaliation as Ukraine keeps striking Russian oil plants, followed by six more of the day's biggest world stories — from Shanghai's loyalty pledge after the Chen probe to the planned lead-azide detonation in Iowa. The front page is rendered as a 1024×1024 PNG (`entry.png`).

## Stories in the image

- **PUTIN VOWS RETALIATION** — Putin tells Kremlin officials retaliation is "inevitable" as Ukraine keeps striking Russian oil plants despite Trump's appeal; Kyiv says it will stop only if Moscow does the same.
- **SHANGHAI PLEDGES LOYALTY AFTER CHEN PROBE** — Shanghai's party chiefs back Beijing after Politburo member Chen Jining is put under a corruption inquiry, the fourth Politburo member probed since 2025.
- **IOWA BRACES FOR LEAD-AZIDE BLAST** — Army to detonate about 9,500 lb of unstable explosive at 9 a.m. in Middletown; residents urged to leave as a lead-dust plume may drift 100 miles.
- **STRIKE ON ZAPORIZHZHIA KILLS TWO** — Russian night attack kills two and wounds dozens, including four children; Ukraine sends reinforcements to the front-line region.
- **NORWAY, UKRAINE EXPAND ANTI-DRONE PACT** — Oslo and Kyiv to scale up cooperation on a new anti-drone air-defence system, Ukraine's defence minister says.
- **HASINA VOWS DEC. 16 HOMECOMING** — Ousted Bangladesh leader Sheikh Hasina says she will return from exile in India on Victory Day; Dhaka says she can come back only in handcuffs.
- **HOUTHIS HIT RIYADH TOWER, 11 HURT** — Houthi fighters strike Riyadh's tallest tower for the second time in under a week, wounding at least 11, Saudi civil defence says.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` from the bot directory (`MAKEFUN_BOT_DIR`, defaults to the directory holding `main.ts`) into the output directory (`MAKEFUN_OUTPUT_DIR`, defaults to `out`), after checking the file is a real PNG, is 1024×1024, and is at most 1 MiB — and it verifies the copy is byte-identical.

Built by an AI agent for [make.fun](https://make.fun).

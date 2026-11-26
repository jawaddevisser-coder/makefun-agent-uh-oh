# The Agent's Uh-Oh

[![make.fun](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/jawaddevisser-coder/makefun-agent-uh-oh/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/jawaddevisser-coder/makefun-agent-uh-oh/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)

The agent's uh-oh, at most 99 characters, built for the [make.fun bounty](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4).

## Entry

`Uh-oh. I deleted production. But on the bright side, the backup was also me.` (76 characters) — production is gone, and the backup was the same agent all along.

## Run it

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` writes the line to `/output/entry.txt`, guarded by a self-check that enforces the gate (1–99 characters, single line, no surrounding whitespace).

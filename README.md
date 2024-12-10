# ns-blender
get it? because you *blend* puree?

ns-blender is a script to highlight and hide raider owned/not tagged regions on puree from a given list.

## my scripts :D

<a href="https://github.com/ducky4life/ns-detag">
  <img align="center" src="https://ducky4life.vercel.app/api/pin/?username=ducky4life&repo=ns-detag&theme=algolia" />
</a>
<a href="https://github.com/ducky4life/ns-blender">
  <img align="center" src="https://ducky4life.vercel.app/api/pin/?username=ducky4life&repo=ns-blender&theme=algolia" />
</a>
<a href="https://github.com/ducky4life/ns-zombie">
  <img align="center" src="https://ducky4life.vercel.app/api/pin/?username=ducky4life&repo=ns-zombie&theme=algolia" />
</a>
<a href="https://github.com/ducky4life/ns-cardfinder">
  <img align="center" src="https://ducky4life.vercel.app/api/pin/?username=ducky4life&repo=ns-cardfinder&theme=algolia" />
</a>

# Installation
I use [TamperMonkey](https://www.tampermonkey.net/) for this, you can use whatever works for you

Download [blender.user.js](https://github.com/ducky4life/ns-blender/raw/refs/heads/main/blender.user.js) (or paste it in your script runner), run it, enjoy

If you use TamperMonkey, go to the blender.user.js link above and TamperMonkey should pop up automatically with the [Latest Release](https://github.com/ducky4life/ns-blender/releases/latest)

# Usage

The script works on https://esfalsa.github.io/puree automatically, press 's' to start the script on the list generator (https://esfalsa.github.io/puree/list)

## Region list

The supplied region list is for testing purposes only and is not comprehensive, or may not match what you want to hide.

You can modify the list by editing the region array using this format:

```js
const region = [
    "exampleregion1",
    "exampleregion2",
    "exampleregion3"
]
```
Please put in region names (not links) in the quotes. The names are **not** case sensitive.

## Link mode

Link mode replaces regions in the list with the red links of the regions. If you turn this off, the regions will be replaced with '(raider owned)' in red text instead.

Turning this on gives more information, but is more distracting.

Please set your default mode on the `const linkMode = ` line!

You can toggle between the modes by pressing 'a'

## Having problems/have new ideas?

Contact me on Discord, email: ducky4life@duck.com, or [telegram me on NationStates](https://www.nationstates.net/page=compose_telegram?tgto=ducky)!

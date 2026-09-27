# Homepage examination prototype

Adopted design direction for the new homepage (2026-09-27): the **F2+F3** tab (`index.html#f4`).
Tabs F1, F2 and F3 are the earlier explorations it came from.

One old-master painting is examined layer by layer as the visitor scrolls, and every layer is a stage of making a model:

| Layer | Stage |
|---|---|
| Visible light | The finished painting; under the lens it is made of words |
| Token map | The painting rewritten as the model's words: the general model is out of focus, your model is sharp |
| Infrared | Dataset |
| X-ray | Base model and pre-training |
| Raking light | Post-training and evaluation |
| Ultraviolet | Deployment and upkeep |

All texts, figures and probabilities in the prototype are illustrative. Paintings were generated on the Lay2 ComfyUI.

Open it over HTTP (WebGL cannot read the images from `file://`):

```bash
cd docs/design/homepage-examination && python3 -m http.server 3400
# http://localhost:3400/#f4
```

Published copy: https://claude.ai/artifact/BrJiV7ZGPgCGkbXkuPBfr3

## Homepage painting (chosen 2026-09-27)

`assets/home-meridian.webp`, 1664 × 1040: **The Meridian**. At first light a scholar in an indigo silk banyan kneels in an observatory hall and marks, with brass dividers, where a beam from a round opening falls on a graduated brass meridian line. It stands for Laplace's sunrise problem, predicting the next day from every day before it. Generated on the Lay2 ComfyUI (Qwen-Image 2.1, seed 2104). The graduation was taken from a reference edit and transferred onto the original brass strip only; the rest of the painting is untouched.

The prototype still uses the earlier Dutch reader; swap `READER_P.src` to this file when building the real homepage. Its X-ray layer painting (the same hall at night, an astronomer at a telescope) is still to be made.

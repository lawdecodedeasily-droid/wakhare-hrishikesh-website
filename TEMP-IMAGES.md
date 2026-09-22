# Temporary Stand-In Images

These 15 files in `images/` are **placeholders**, not real client photos. Each is a center-cropped duplicate of another image in the folder, cropped to the correct ratio for its slot so the layout looks right. **Swap every one of these out** as soon as the client sends the real photo/graphic for that slot — do not ship to production with these in place.

| Filename | Target ratio | Temporary source |
|---|---|---|
| `initiative-dakhyata-panji.jpg` | 16:9 | `80b41b42-1abe-4d3c-bbc7-efb7d28d3a9c.JPG` (raw, unassigned) |
| `initiative-pia-index.jpg` | 16:9 | `308f9b64-4702-4a88-bfee-beee336f4fde.JPG` (raw, unassigned) |
| `initiative-kaushal-rath.jpg` | 16:9 | `942d9cb4-eeb0-456d-8aad-8d8d39b4d56f.jpg` (raw, unassigned) |
| `initiative-dst.jpg` | 16:9 | `about-portrait.jpg` |
| `initiative-nano-unicorn.jpg` | 16:9 | `home-portrait.jpg` |
| `initiative-vision-2036.jpg` | 16:9 | `gallery-gandhi-fellowship.jpg` |
| `initiative-frontier-tech.jpg` | 16:9 | `gallery-isb.jpg` |
| `initiative-women-trainees.jpg` | 16:9 | `gallery-jansuraaj.jpg` |
| `media-job-fair-video.jpg` | 16:9 | `gallery-skilldev-jobfair.jpg` |
| `testimonial-yugal-kishor.jpg` | 1:1 | `gallery-skilldev-kaushalrath.jpg` |
| `testimonial-raman-jeet.jpg` | 1:1 | `80b41b42-1abe-4d3c-bbc7-efb7d28d3a9c.JPG` (raw, unassigned) |
| `publication-impri-paper.jpg` | 3:4 | `308f9b64-4702-4a88-bfee-beee336f4fde.JPG` (raw, unassigned) |
| `publication-infographic.jpg` | 3:4 | `942d9cb4-eeb0-456d-8aad-8d8d39b4d56f.jpg` (raw, unassigned) |
| `gallery-cpl.jpg` | 4:3 | `about-portrait.jpg` |
| `gallery-organizations.jpg` | 4:3 | `home-portrait.jpg` |

## Notes
- The 3 raw unassigned files (`80b41b42-...JPG`, `308f9b64-...JPG`, `942d9cb4-...jpg`) are still sitting in `images/` in their original, uncropped form — they were only read from (copied + cropped), not modified or deleted. They can be reused as source material again or removed once no longer needed.
- Once the client sends the 15 real images (with these exact filenames), just overwrite the files in `images/` — no HTML changes needed, and no code changes needed — the `<img>` tags already point to these exact filenames.
- After swapping in real photos, delete this file.

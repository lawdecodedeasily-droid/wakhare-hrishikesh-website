# Temporary Stand-In Images

These 3 files in `images/` are **placeholders**, not real client photos. Each is a center-cropped duplicate of another image in the folder, cropped to the correct ratio for its slot so the layout looks right. **Swap every one of these out** as soon as the client sends the real photo/graphic for that slot — do not ship to production with these in place.

| Filename | Target ratio | Temporary source |
|---|---|---|
| `media-job-fair-video.jpg` | 16:9 | copied from the original `gallery-skilldev-jobfair.jpg` (that source file has since been deleted; the copy remains) |
| `publication-impri-paper.jpg` | 3:4 | `308f9b64-4702-4a88-bfee-beee336f4fde.JPG` (raw, unassigned) |
| `publication-infographic.jpg` | 3:4 | `942d9cb4-eeb0-456d-8aad-8d8d39b4d56f.jpg` (raw, unassigned) |

## Notes
- The 3 raw unassigned files (`80b41b42-...JPG`, `308f9b64-...JPG`, `942d9cb4-...jpg`) are still sitting in `images/` in their original, uncropped form — they were only read from (copied + cropped), not modified or deleted. They can be reused as source material again or removed once no longer needed.
- Once the client sends the 3 real images (with these exact filenames), just overwrite the files in `images/` — no HTML changes needed, and no code changes needed — the `<img>` tags already point to these exact filenames.
- After swapping in real photos, delete this file.
- `images/gallery/` and `images/logos/` are **real client photos/logos** (from the "Testimonial_s for Website(Hrishikesh)" folder), not placeholders — nothing to swap out there.

# Veterans Walk Gallery Replica

## Source

- URL: https://dillsboro.in/community/vetwalk
- Captured: August 1, 2026
- Scope: page content only; the source site's header, page-title banner, and footer are excluded.

## Design Summary

The gallery uses a restrained municipal-site layout: a centered 1140px content area, Montserrat typography, a four-column image grid, dark bottom gradients, and white names over the images. Pagination uses compact bordered controls with the source site's orange accent.

## Design Tokens

- Text: `#333333`
- Muted text: `#666666`
- Accent: `#f07d02`
- Border: `#dddddd`
- Background: `#ffffff`
- Typeface: Montserrat, with Arial and sans-serif fallbacks
- Maximum content width: 1140px
- Gallery gap: 30px
- Card height: 200px on desktop

## Components and Behavior

- Four-column desktop gallery, two columns on tablets, and one column on phones.
- Each card uses the memorial image as its entire surface and places the person's name within a bottom gradient.
- Selecting a card opens the original full-size memorial image in a new tab.
- An A–Z directory groups the cards by the first letter of each displayed last name.
- Available letters link to dedicated gallery pages; letters with no records remain visible but inactive.
- Pressing a letter key opens that letter's page when records are available.

## Asset Note

All memorial cards are stored under `assets/memorials`. Both gallery thumbnails and full-size card links stay inside the replica.

# Maintenance

Static version of cancogen/portal with explorer and submission features disabled. To be used during maintenance outages.

Built using:

- commit: 5cbf9ba5330c17ba5628d02dea246ac79afaee64
- branch: https://github.com/cancogen-virus-seq/portal/tree/export-maintenance-site

## Building

- checkout/clone portal repo from https://github.com/cancogen-virus-seq/portal
- set env variables in `.env.local` in the root directory
- build and export via next js `npx next build && npx next export`
- take contents of `./out` folder and place them in this repo
- finally check in the changes into git

### Run locally with:

Modern browsers might not render the static pages correctly if the files are opened directly. So, it is recommended to run locally via a http server.

Example:

```
npx http-server
```

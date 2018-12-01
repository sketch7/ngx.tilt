[projecturi]: https://github.com/ssv/ngx.tilt
[projectgit]: https://github.com/ssv/ngx.tilt.git
[changelog]: ./CHANGELOG.md
[releaseworkflowwiki]: ./docs/RELEASE-WORKFLOW.md

[npm]: https://www.npmjs.com

# @ssv/ngx.tilt
[![CircleCI](https://circleci.com/gh/ssv/ngx-tilt)](https://circleci.com/gh/ssv/ngx.tilt)

Angular Wrapper for [Vanilla Tilt](https://github.com/micku7zu/vanilla-tilt.js/) a smooth 3D tilt.

**Quick links**

[Change logs][changeLog] | [Project Repository][projectUri]

# Installation

Get library via [npm]

```bash
npm install vanilla-tilt @types/vanilla-tilt @ssv/ngx.tilt
```

# Usage

## Register module

```ts
import { TiltModule } from "@ssv/ngx.tilt";

@NgModule({
  imports: [
    TiltModule
  ]
}
export class AppModule {
}
```

```html
<!-- simple -->
<div ssvTilt>
  im tilt
</div>
```

```ts
const tiltOptions: TiltOptions = {
  glare: true,
  ["max-glare"]: 0.5
}
```

```html
<!-- with options -->
<div ssvTilt [tiltOptions]="tiltOptions">
  show only when large
</div>
```

#### Cloning Repo

* Run `git clone https://github.com/ssv/ngx.tilt`

### Project Setup

The following process need to be executed in order to get started.

```bash
npm install
```

### Building the code

```bash
npm run build
```

### Running the tests

```bash
npm test
```

### Development utils

#### Watch

Builds on changes.

```bash
npm start
```

#### Running Continuous Tests

Spawns test runner and keep watching for changes.

```bash
npm run tdd
```

### Preparation for Release

```bash
npm run prepare-release -- --bump major|minor|patch|prerelease (default: patch)
```

Check out the [release workflow guide][releaseworkflowwiki] in order to guide you creating a release and publishing it.

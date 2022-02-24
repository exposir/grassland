<!-- Please don't delete this template -->

<!-- PULL REQUEST TEMPLATE -->
<!-- (Update "[ ]" to "[x]" to check a box) -->

**Summary**

In context of packages declared as type module in package.json, using config.js does not work due to expecting ES modules syntax in that file and vuepress still trying to use `require()` for loading. In such a context, Node.js supports extension `.cjs` to individually mark a file as CommonJS style. However, VuePress didn't recognize those files due to lack of explicitly looking for them. And that's what this PR is for.

**What kind of change does this PR introduce?** (check at least one)

- [x] Bugfix
- [x] Feature
- [ ] Code style update
- [ ] Refactor
- [ ] Docs
- [ ] Build-related changes
- [ ] Other, please describe:

If changing the UI of default theme, please provide the **before/after** screenshot:

**Does this PR introduce a breaking change?** (check one)

- [ ] Yes
- [x] No

If yes, please describe the impact and migration path for existing applications:

**The PR fulfills these requirements:**

- [x] When resolving a specific issue, it's referenced in the PR's title (e.g. `fix #xxx[,#xxx]`, where "xxx" is the issue number)

You have tested in the following browsers: (Providing a detailed version will be better.)

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] IE

If adding a **new feature**, the PR's description includes:

- [x] A convincing reason for adding this feature
- [ ] Related documents have been updated
- [ ] Related tests have been updated

To avoid wasting your time, it's best to open a **feature request issue** first and wait for approval before working on it.

**Other information:**

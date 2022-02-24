<!-- Please don't delete this template -->

<!-- PULL REQUEST TEMPLATE -->
<!-- (Update "[ ]" to "[x]" to check a box) -->

**Summary**

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

- [x] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] IE

This PR is all about build phase. No need to check browser compability.

If adding a **new feature**, the PR's description includes:

- [ ] A convincing reason for adding this feature
- [x] Related documents have been updated
- [ ] Related tests have been updated

To avoid wasting your time, it's best to open a **feature request issue** first and wait for approval before working on it.

**Other information:**

To fix #1819. Vuepress build would fail for many docs, for Promise.all push thousands of files to VueServer to render concurrently and cause OOM. 
#2454 tried to fix this problem. However, with pLimit fixed to 50, the build process may be significantly slowed down. To fix this, this PR makes it optional as a `vuepress build` param.

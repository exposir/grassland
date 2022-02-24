<!-- Please don't delete this template or we'll close your issue -->
<!-- Before creating an issue please make sure you are using the latest version of VuePress. -->

<!-- Please confirm you will submit an issue. -->
<!-- Issues which contain questions or support requests will be closed. -->
<!-- (Update "[ ]" to "[x]" to check a box) -->

- [x] I confirm that this is an issue rather than a question.

<!-- Please ask questions via following several ways. -->
<!-- https://vue-land.js.org/ -->
<!-- https://forum.vuejs.org/ -->
<!-- https://stackoverflow.com/questions/ask?tags=vuepress -->

## Bug report

#### Steps to reproduce

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

Security alerts by **GitHub Dependabot**, after pushing <https://github.com/Dragon1573/Study-Notes/commit/9274ea7046db0a09fcff7d89bf32d491b82178a7> to the repository.

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

<details>
<summary>Minimal reproduction here (click to expand)</summary>

```text
Repository λ mkdir vuepress-vulnerablilities

Repository λ cd .\vuepress-vulnerablilities

vuepress-vulnerablilities λ yarn set version berry
➤ YN0000: Retrieving https://repo.yarnpkg.com/3.1.1/packages/yarnpkg-cli/bin/yarn.js
➤ YN0000: Saving the new release in .yarn/releases/yarn-3.1.1.cjs
➤ YN0000: Done in 3s 502ms

vuepress-vulnerablilities λ yarn init
{
  name: 'vuepress-vulnerablilities',
  packageManager: 'yarn@3.1.1'
}

vuepress-vulnerablilities on main  ● λ echo 'nodeLinker: node_modules' >> .yarnrc.yml

vuepress-vulnerablilities on main  ● λ yarn add -D vuepress
➤ YN0000: ┌ Resolution step
➤ YN0000: │ ... (18 lines folded)
➤ YN0000: └ Completed in 28s 856ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ ... (5 lines folded)
➤ YN0000: └ Completed in 4s 169ms
➤ YN0000: ┌ Link step
➤ YN0007: │ ... (4 lines folded)
➤ YN0000: └ Completed in 16s 987ms
➤ YN0000: Done with warnings in 50s 209ms

vuepress-vulnerablilities on main  ● λ yarn npm audit -A -R
├─ ansi-regex: 4.1.0
│  ├─ Issue:  Inefficient Regular Expression Complexity in chalk/ansi-regex
│  ├─ URL: https://github.com/advisories/GHSA-93q8-gq69-wqmw
│  ├─ Severity: moderate
│  ├─ Vulnerable Versions: >2.1.1 <5.0.1
│  ├─ Patched Versions: >=5.0.1
│  ├─ Via: vuepress
│  └─ Recommendation: Upgrade to version 5.0.1 or later
│
├─ highlight.js: 9.18.5
│  ├─ Issue: ReDOS vulnerabities: multiple grammars
│  ├─ URL: https://github.com/advisories/GHSA-7wwv-vh3v-89cq
│  ├─ Severity: moderate
│  ├─ Vulnerable Versions: >=9.0.0 <10.4.1
│  ├─ Patched Versions: >=10.4.1
│  ├─ Via: vuepress
│  └─ Recommendation: Upgrade to version 10.4.1 or later
│
├─ markdown-it: 8.4.2
│  ├─ Issue: Uncontrolled Resource Consumption in markdown-it
│  ├─ URL: https://github.com/advisories/GHSA-6vfc-qv3f-vr6c
│  ├─ Severity: moderate
│  ├─ Vulnerable Versions: <12.3.2
│  ├─ Patched Versions: >=12.3.2
│  ├─ Via: vuepress
│  └─ Recommendation: Upgrade to version 12.3.2 or later
│
├─ node-forge: 0.10.0
│  ├─ Issue: Open Redirect in node-forge
│  ├─ URL: https://github.com/advisories/GHSA-8fr3-hfg3-gpgp
│  ├─ Severity: moderate
│  ├─ Vulnerable Versions: <1.0.0
│  ├─ Patched Versions: >=1.0.0
│  ├─ Via: vuepress
│  └─ Recommendation: Upgrade to version 1.0.0 or later
│
├─ nth-check: 1.0.2
│  ├─ Issue: Inefficient Regular Expression Complexity in nth-check
│  ├─ URL: https://github.com/advisories/GHSA-rp65-9cf3-cjxr
│  ├─ Severity: moderate
│  ├─ Vulnerable Versions: <2.0.1
│  ├─ Patched Versions: >=2.0.1
│  ├─ Via: vuepress
│  └─ Recommendation: Upgrade to version 2.0.1 or later
│
└─ postcss: 7.0.39
   ├─ Issue: Regular Expression Denial of Service in postcss
   ├─ URL: https://github.com/advisories/GHSA-566m-qj78-rww5
   ├─ Severity: moderate
   ├─ Vulnerable Versions: <8.2.13
   ├─ Patched Versions: >=8.2.13
   ├─ Via: vuepress
   └─ Recommendation: Upgrade to version 8.2.13 or later
```

</details>

#### What is expected?

There should be **NO** vulnerabilities in the project.

#### What is actually happening?

There are **7** vulnerabilities in the project.

![image](https://user-images.githubusercontent.com/49941141/152952404-27a7fd80-e57e-4fcc-93c6-3c836f58d0dc.png)

![image](https://user-images.githubusercontent.com/49941141/152952577-0045ec5e-32e5-428c-80ec-d238f6ac348d.png)

#### Other relevant information

- I'm currently using `yarn@3.1.1` instead of `npx`, I have no idea how to get those informations as in `npx vuepress info`.
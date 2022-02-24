Bumps [markdown-it](https://github.com/markdown-it/markdown-it) from 8.4.2 to 12.3.2.
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/markdown-it/markdown-it/blob/master/CHANGELOG.md">markdown-it's changelog</a>.</em></p>
<blockquote>
<h2>[12.3.2] - 2022-01-08</h2>
<h3>Security</h3>
<ul>
<li>Fix possible ReDOS in newline rule. Thanks to <a href="https://github.com/MakeNowJust"><code>@​MakeNowJust</code></a>.</li>
</ul>
<h2>[12.3.1] - 2022-01-07</h2>
<h3>Fixed</h3>
<ul>
<li>Fix corner case when tab prevents paragraph continuation in lists, <a href="https://github-redirect.dependabot.com/markdown-it/markdown-it/issues/830">#830</a>.</li>
</ul>
<h2>[12.3.0] - 2021-12-09</h2>
<h3>Changed</h3>
<ul>
<li><code>StateInline.delimiters[].jump</code> is removed.</li>
</ul>
<h3>Fixed</h3>
<ul>
<li>Fixed quadratic complexity in pathological <code>***&lt;10k stars&gt;***a***&lt;10k stars&gt;***</code> case.</li>
</ul>
<h2>[12.2.0] - 2021-08-02</h2>
<h3>Added</h3>
<ul>
<li>Ordered lists: add order value to token info.</li>
</ul>
<h3>Fixed</h3>
<ul>
<li>Always suffix indented code block with a newline, <a href="https://github-redirect.dependabot.com/markdown-it/markdown-it/issues/799">#799</a>.</li>
</ul>
<h2>[12.1.0] - 2021-07-01</h2>
<h3>Changed</h3>
<ul>
<li>Updated CM spec compatibility to 0.30.</li>
</ul>
<h2>[12.0.6] - 2021-04-16</h2>
<h3>Fixed</h3>
<ul>
<li>Newline in <code>alt</code> should be rendered, <a href="https://github-redirect.dependabot.com/markdown-it/markdown-it/issues/775">#775</a>.</li>
</ul>
<h2>[12.0.5] - 2021-04-15</h2>
<h3>Fixed</h3>
<ul>
<li>HTML block tags with <code>===</code> inside are no longer incorrectly interpreted as headers, <a href="https://github-redirect.dependabot.com/markdown-it/markdown-it/issues/772">#772</a>.</li>
<li>Fix table/list parsing ambiguity, <a href="https://github-redirect.dependabot.com/markdown-it/markdown-it/issues/767">#767</a>.</li>
</ul>
<h2>[12.0.4] - 2020-12-20</h2>
<h3>Fixed</h3>
<ul>
<li>Fix crash introduced in <code>12.0.3</code> when processing strikethrough (<code>~~</code>) and similar plugins, <a href="https://github-redirect.dependabot.com/markdown-it/markdown-it/issues/742">#742</a>.</li>
<li>Avoid fenced token mutation, <a href="https://github-redirect.dependabot.com/markdown-it/markdown-it/issues/745">#745</a>.</li>
</ul>
<h2>[12.0.3] - 2020-12-07</h2>
<h3>Fixed</h3>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/markdown-it/markdown-it/commit/d72c68b520cedacae7878caa92bf7fe32e3e0e6f"><code>d72c68b</code></a> 12.3.2 released</li>
<li><a href="https://github.com/markdown-it/markdown-it/commit/aca33963612b27d4c25d5051c5fb7ba986598686"><code>aca3396</code></a> dist rebuild</li>
<li><a href="https://github.com/markdown-it/markdown-it/commit/ffc49ab46b5b751cd2be0aabb146f2ef84986101"><code>ffc49ab</code></a> Fix possible ReDOS in newline rule.</li>
<li><a href="https://github.com/markdown-it/markdown-it/commit/76469e83dc1a1e3ed943b483b554003a666bddf7"><code>76469e8</code></a> 12.3.1 released</li>
<li><a href="https://github.com/markdown-it/markdown-it/commit/ae5a243baff7164f6810a5af007915f903ee3495"><code>ae5a243</code></a> dist rebuild</li>
<li><a href="https://github.com/markdown-it/markdown-it/commit/1cd8a5143b22967a7583bba19678900efdf72adf"><code>1cd8a51</code></a> Fix tab preventing paragraph continuation in lists</li>
<li><a href="https://github.com/markdown-it/markdown-it/commit/830757c03282f6ca3cedada5c3bf9f98a9bdff13"><code>830757c</code></a> Fix spelling error in question Github Template (<a href="https://github-redirect.dependabot.com/markdown-it/markdown-it/issues/835">#835</a>)</li>
<li><a href="https://github.com/markdown-it/markdown-it/commit/2e31d3430187d2eee1ba120c954783eebb93b4e8"><code>2e31d34</code></a> 12.3.0 released</li>
<li><a href="https://github.com/markdown-it/markdown-it/commit/393354ca6f40af0e2163aaf106500819843ce009"><code>393354c</code></a> Dist rebuild</li>
<li><a href="https://github.com/markdown-it/markdown-it/commit/8564eed92e37b07ab7f41fa00bd1bce086430d00"><code>8564eed</code></a> Dev deps bump</li>
<li>Additional commits viewable in <a href="https://github.com/markdown-it/markdown-it/compare/8.4.2...12.3.2">compare view</a></li>
</ul>
</details>
<br />


[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=markdown-it&package-manager=npm_and_yarn&previous-version=8.4.2&new-version=12.3.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)

Dependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.

[//]: # (dependabot-automerge-start)
[//]: # (dependabot-automerge-end)

---

<details>
<summary>Dependabot commands and options</summary>
<br />

You can trigger Dependabot actions by commenting on this PR:
- `@dependabot rebase` will rebase this PR
- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it
- `@dependabot merge` will merge this PR after your CI passes on it
- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it
- `@dependabot cancel merge` will cancel a previously requested merge and block automerging
- `@dependabot reopen` will reopen this PR if it is closed
- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually
- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)
- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)
- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)
- `@dependabot use these labels` will set the current labels as the default for future PRs for this repo and language
- `@dependabot use these reviewers` will set the current reviewers as the default for future PRs for this repo and language
- `@dependabot use these assignees` will set the current assignees as the default for future PRs for this repo and language
- `@dependabot use this milestone` will set the current milestone as the default for future PRs for this repo and language

You can disable automated security fix PRs for this repo from the [Security Alerts page](https://github.com/vuejs/vuepress/network/alerts).

</details>
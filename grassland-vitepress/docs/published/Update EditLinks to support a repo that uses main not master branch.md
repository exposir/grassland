<!-- Please don't delete this template or we'll close your issue -->
<!-- Before creating an issue please make sure you are using the latest version of VuePress. -->

## Feature request

Update code to support edit links to repo that uses `main` over `master`.


I am talking about the following `edit link`
```
themeConfig: {
  editLinks: true
}
```


More information here:
https://github.com/github/renaming

<!-- Please ask questions on StackOverflow. -->
<!-- https://stackoverflow.com/questions/ask?tags=vuepress -->
<!-- Issues which contain questions or support requests will be closed. -->

#### What problem does this feature solve?

Currently any repo using main instead of master edit links will be broken and 404 when clicked

#### What does the proposed API look like?
N/A

#### How should this be implemented in your opinion?
Possible config option.
eg:
```
themeConfig: {
  mainRepoBranch: 'master'
}
```

This would prevent it being a breaking change, and people can change to `main` until a time vuepress wishes to change to `main`

#### Are you willing to work on this yourself?
Could do.
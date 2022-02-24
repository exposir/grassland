sorry,  my english is not good, i'm,chinese. 

i need your help. thanks

I need home page footer support link .

i read issues #859 explain 

> Theme Inheritance, you can create a custom theme to extend the default theme to get it.

I read it for two days  [Theme Inheritance](https://v1.vuepress.vuejs.org/theme/inheritance.html#theme-inheritance), However, I also did not find how to customize the home page footer

That's why I came here to ask for help

but  document not explain how to custom home footer 

i don't see a footer slot , i see this issues , #1880 seems to have rejected the footer slot

it's home code , how to custom footer?
```
<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>

      <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        v-if="data.actionText && data.actionLink"
        class="action"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>

    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

```
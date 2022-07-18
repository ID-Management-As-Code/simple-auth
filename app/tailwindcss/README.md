# Using Tailwindcss with Deno Fresh

So, Twind doesn't support tailwind v3, and I want to use v3, and I cannot for the life of my figure out how to use twind with v3, so... Tailwind CLI it is.

In order to use this you will need to run the following command during development within the context of the `tailwindcss` folder:

```
npx tailwindcss -i ./css/main.css -o ../static/styles.css --watch
```

And when your site is ready to release, run the following command in the pipeline of your choosing:

```
npx tailwindcss -m -i ./css/main.css -o ../static/styles.min.css
```


## Challenge

1 - <mark>request 3 random dog breeds from the url, https://dog.ceo/api/breeds/image/random </mark>

2 - <mark>In a row, render images (sized 240px x 240px) of all 3 dog breeds</mark> along with the name of the breed, spelled out with no dashes and capitalized first letter of each word in the name. (e.g. "blood-hound" would be "Blood Hound")

## Bonus

1 - display how many seconds it took to fetch each breed from the API (e.g .012 seconds).  Display it underneath the picture of each breed.

2 - <mark>make the UI responsive such that, when the screen is too narrow, the dog breeds are rendered in a column</mark>

3 - create a separate "DogBreed" component that renders each dog breed.  The DogBreed component should take 3 props: imageUrl, name, and number of seconds to load the data for the given breed. The DogBreed component should get rendered from within the index.js file.

## Resources

NextJS Docs
https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

Query in NextJS
https://www.webdevtutor.net/blog/how-to-get-query-parameters-from-a-url-in-nextjs

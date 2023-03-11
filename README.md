## What is the Composition API?

-> New way to create Vue components
-> Alternative to Options API
-> Solves 2 main problems:
. Group Relevant Code Together
. Reuse Code More Easily(Composables)

## Can we add more than one hooks?

Yes, we can for example, add multiple mounted hooks to the app.

## What is a composable?

It allows us to extract reactive data and methods, and reuse those reactive data and methods
across multiple components without duplicate code.

## What are the differences between composables and mixins?

https://vueschool.io/articles/vuejs-tutorials/what-is-a-vue-js-composable/

## Composable State vs Vuex vs Pinia

Evan You suggests to use Pinia as the new management system in Vue apps.
Pinia has some advantages over Vuex:
-> Pinia has 3 main blocks: state, getters, and actions
Vuex has 4 blocks state, getters, mutations, and actions.
Pinia's actions can directly mutate the state without needing to commit in a mutation.

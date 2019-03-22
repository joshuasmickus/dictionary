# README

Thank you for reading my tech test submission.

For my submission I took it that I needed to create several things:
- a way of creating new 'dictionary' types, consisting of a name and id
- a way to create new 'dictionary item' types, consisting of a from word, to word, id and dictionary id (a foreign key)
- a way to delete dictionaries and dictionary items
- validation around how these are created

I tried to show a smattering of the way I would design an application, this is by no means a finished application, although it works, I missed off some of the requirements and added some quick wins in, purely because of time constraints.

Extras that I added include 'toasts', local storage (for persistence of state) and routing.

I did not let the users edit the functionality, and I did not add a way of uploading a data set and running a dictionary on the data set. I felt like the running of the data set would have been a key part of the spec, but it didn't appear to be written in there in any obvious way, "validating the entire dictionary" seemed to be the most obvious spec which could have been interpreted as that, but I took it to mean validation of the items that were being added to the dictionary.

I chose to use redux-saga-routines (despite not needed sagas) because I love their syntax for creating actions.

I chose to use immer for immutable reducers, I love the syntax of this library as it feels more like regular JS syntax.

I used react-toastify for creating toasts in a simple API and adding some nice UX touches for the user, and redux-persist for persisting the state between hard reloads.

The main bit of validation was done in CreateDictionaryItem.validate, and so I added some tests to this as I felt it was important.

I added some basic snapshot tests as well for the React component coverage, and would have added more if I had more time to complete the task.

A lot of the style and chosen technologies are what I use in my current role, and some are flavours which I have developed over the last few years in my professional career. I love writing easily maintainable code and part of this is making sure it is self documenting and written in a way that a more junior develop could understand too, I hope you feel I have achieved that here.

Thanks

Josh


## Instructions

`yarn` to install the npm modules
`yarn start` to start the dev server
`yarn test` to run the unit tests
`yarn lint` to check lint style
`yarn build` to get a production build built

This was built on a machine using:

```
node -v // v10.13.0
npm -v // 6.4.1
```

So if you are using node/npm of a different version you might run into issues.

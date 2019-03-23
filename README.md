# Worklete To Do App

**Demo**: https://todo.manfrincdn.com

## Explaination
I went the frontend route, as I feel todo apps are more frontend things (backend would be basically a CRUD app).

I built this in Vue from scratch. The TodoMVC version was very out of date (3 years) and I figured I wouldn't save much time using that version considering there'd be a ramp-up time reading the out-of-date code. 

## Accomplishments
I got it as near pixel-perfect as I could. I had to use a font scanner to guess the font used was Open Sans. Also, in the 'Show' buttons, there is inconsistent padding around the words in the mocks, I made them consistent. 

The checkboxes were difficult, since this feels like an asset that would normally come with an SVG -- I had to try to replicate it the best I could (it's not perfect), and SVGs aren't something I've made before. I think it turned out alright, although I'd have cleaned up the uncheck animation if I had more time (right now it just refreshes, rather than animates back).

The Add Task button slides out an input, and cancel/submit buttons. The form will respond to Enter and Escape as well. 

The whole application is using Vuex for state (rather than individual components managing their own state). 

I also added a populate button at the bottom to populate the app with the data shown in the mock. 

## Improvements
I ran out of time, but the next features I wanted to add were:
  1. Delete Button.
  2. Editing
  3. Tagging to-dos with a name, and then having those names show up as extra filters. 
  4. Making the page responsive (it's currently a fixed width application).
  5. I really wanted to build in a local save feature using localstorage, but this would have taken a lot longer as it's been a long time since I've worked with localstorage. I build this using a state manager (vuex) with this in mind, however. 
  6. I do not like the transition animation on the Add Task feature, would want to fix that up. 
  7. Animation for changing filters. 

## Caveats
I haven't tested on mobile, that would be something I'd want to do with more time. 

Don't use the populate button twice, was meant mainly as convenience and it has hardcoded ids, Vue will break if it's added multiple times. 
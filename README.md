**PHYSICS CHARGE STIMULATOR**

Redoing physics charge stimulator in HTML+JS (and some CSS), 
since the last one (done in C++ using SFML) was quite buggy and had no UI at all.

*Changes Planned:*
- Use more functional style
- Interactive model, where users can change things any time

*Difficulties Foreseen:*
- Problem of very high speeds when particles are attracted and rushing towards each other
  (velocity is so high that they overshoot each other)


**SERVER CODE**
- User sign up / sign in
- Create / Edit / Save files representing system of charges (format: JSON)

**CLIENT CODE**
*Note*: Client code needs to be run on fake server, which serves code from localhost (eg. live-server)
        (This is because of CORS policy for scripts, which applies when using ES5 modules)
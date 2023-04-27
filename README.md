# TORNEOS LBDL APP

**Torneos LBDL App** is a MERN stack app to make tournaments in an organized way against your friends and give each one a personal customization. Its Front-End client is deployed in [Vercel](https://vercel.com/docs) and its Back-End server is deployed on [Render](https://render.com/docs). You can visit the official website clicking [here](https://torneos-lbdl.vercel.app). <br>
To conclude, if you are interested in **Torneos LBDL** you can visit its [Youtube](https://www.youtube.com/@torneoslbdl) channel or [Instagram](https://www.instagram.com/torneoslbdl) account, where they post all their FIFA content.

## Documentation:<br>

- [Next.js](https://nextjs.org/docs/getting-started) <br>
- [React.js](https://legacy.reactjs.org/docs/getting-started.html)<br>
- [Express.js](https://expressjs.com/en/starter/installing.html)<br>
- [Cors](https://www.npmjs.com/package/cors)<br>
- [Mongo Atlas](https://www.mongodb.com/docs/atlas/getting-started/)<br>
- [MongoDB](https://www.mongodb.com/docs/manual/reference/method/)
- [Mongoose](https://mongoosejs.com/docs/)<br>
- [MaterialUI](https://mui.com/material-ui/getting-started/overview/) <br>
- [Dotenv](https://www.npmjs.com/package/dotenv) <br>

# How does this app work?

_*<p style="background-color:red;">DISCLAIMER: TO AVOID SEVERAL ERRORS/BUGS/GLITCES, I HIGHLY RECOMMEND READING ALL THE COMMENTS AROUND THE CODE. THEY EXPLAIN EVERYTHING YOU'LL NEED TO KNOW.<p>*_

Torneos LBDL App is an app built to make tournaments and keep the data of all the matches in an ordered way. You can pull this project and create your own tournament with your friends or update the project in any way you want to. <br>
<br>
Now let's talk about what you'll need to do to run this app properly and make your own tournaments!<br>

1. After you have pulled/forked/copied the code, you will have to run `npm i` in both **"client/torneoslbdl"** and **"/server"** to install all the required dependencies.
2. After that you'll need to create an .env file inside the **"/server"** where you keep the following variables:

```bash
# Enviroment Variables

DB="your mongo database link"
PORT="the port you want to use, avoid using 3000 as Next will launch our front end in 3000 port"
HOST="where your app is going to be hosted"

# Example

DB="mongolink"
PORT=3001
HOST="http://localhost:3001"

```

In addition, you also need to replace host variable inside client/torneoslbdl folder in `next.config.mjs` with yours.

3. Then you will need to use [Postman](https://www.postman.com/api-documentation-tool/) to start adding the data into your database. But **BEFORE ADDING THE DATA RANDOMLY** I recommend you to add the data in the following order:
   1. Teams
   2. Tournaments
   3. Matches

_This is because matches components **MUST** get *Tournaments* and *Teams* data to work properly._

4. **IMPORTANT**: Before adding any data you should read the code comments, because many components work based on conditionals that are previously set to work only with **TORNEOS LBDL** organization.

5. If you have already read all the comments in the code, you are finally ready to use the app. <br>
   To start the **BACK-END server** you will go to the _/server_ folder and run `npm start` commnad. <br>
   To start the **FRONT-END client** you will go to the _/client/torneoslbdl_ folder and run `npm run dev` command. <br>

## And that's it!

Now you can enjoy this app in any way you want to!

# Coming soon...

- Admin panel to create, read, update and delete any team/tournament/match.
- User system.
- Screen loaders.
- Error handlers.
- Tablet & desktop view.
- Fix "Historiales" filter

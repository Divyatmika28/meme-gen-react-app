# meme-gen-react-app
Meme Generator react app -  codecamp

Simple React application based on components and form. Uses an API to fetch meme images.

# Published app on github 
https://Divyatmika28.github.io/meme-gen-react-app

# How to publish apps on github steps? 
Step 1 : 
> Add *"homepage": "https://Username.github.io/ProjectName"* in package.json
> Add  "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    in scripts section in package.json 
    
Step 2: 
> Navigate to your project folder and open terminal
> git remote add origin https://github.com/Username/RepoName 
> git remote set-url origin https://github.com/Username/RepoName 
> npm run build
> npm run deploy

If there is an error while running deploy command first run "npm install gh-pages --save-dev" and then run npm run deploy
    
    
    


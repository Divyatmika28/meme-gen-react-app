# meme-gen-react-app
Meme Generator react app -  codecamp

Simple React application based on components and form. Uses an API to fetch meme images.

# Published app on github 
https://Divyatmika28.github.io/meme-gen-react-app

# How to publish apps on github steps? 
Step 1 : 
    a. Add in package.json "homepage": "https://Username.github.io/ProjectName"* 
    b. Add in scripts section in package.json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
     
    
Step 2: 
    a.  Navigate to your project folder and open terminal
    b. git remote add origin https://github.com/Username/RepoName 
    c. git remote set-url origin https://github.com/Username/RepoName 
    d. npm run build
    e. npm run deploy

If there is an error while running deploy command first run "npm install gh-pages --save-dev" and then run npm run deploy
    
    
    


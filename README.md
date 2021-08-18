# Great Podcasts
The app is made using CodeSandbox and is based on ReactJS. It displays my top podcast recommendations.
## Working
1. The user interacts with the app by clicking on the three catagory buttons in the app.
1. Upon clicking the catagory button, onClickHandler function is called and the value of catagory variable is passed.
1. The default value of catagory is the first catagory in the object dictionary. If some other button is been clicked other than that catagory the catagory is changed using useState. 
1. Below the buttons, there exist a list which displays the recommendations of that perticular catagory. Inside the list tags there are elements which fetch the data from object dictionary and display it to the user.
# Dwight Eisenhower Matrix
An Eisenhower Matrix Application

## What is Eisenhower Matrix ? 
The Eisenhower Matrix is a productivity, prioritization, and time-management framework designed to help you prioritize a list of tasks or agenda items by first categorizing those items according to their urgency and importance.

Also called an Eisenhower Decision Matrix, Eisenhower Box, or Urgent-Important Matrix, this approach consists of drawing a four-box square with an x-axis labeled Urgent and Not Urgent, and the y-axis labeled Important and Not Important. Then, group the items on your list into one of the four boxes, with the Urgent-and-Important box in the upper left requiring your immediate action.

## How do you use the Eisenhower Matrix ?
After you’ve drawn your Eisenhower Matrix, you will have four empty boxes, two by two. This will allow you to categorize your to-do items into one of four possible descriptions:<br/>
**1. First Quadrant  (upper left): urgent and important**<br/>
**2. Second Quadrant  (upper right): important, but not urgent**<br/>
**3. Third Quadrant (lower left): not important, but urgent**<br/>
**4. Fourth Quadrant (lower right): neither important nor urgent**<br/>

## Installation Guide 
1. First download the code using the .zip download or if you have git installed then : 
    - Check if you have git installed
        ```
        $ git --version
        ```

        if the output gives a version, then proceed with the next step of cloning the github repo
        ```
        $ git clone https://github.com/atharva0300/Dwight
        $ cd Dwight
        ```
2. Setup the virtual environment
    - To create a virtual environment, run the following 
    ```
    $ python3 -m venv myenv
    $ source myenv/bin/activate
    ```

3. Install the dependencies from the requirements.txt file 
    ```
    $ pip install -r requirements.txt
    ```

4. Create a .env file in the /backend directory of the project and initialize the Django secret key 
    ```
    # SECURITY WARNING: keep the secret key used in production secret!
    SECRET_KEY = 'YOUR DJANGO SECRET KEY GOES HERE'

    ```

5. Initialize your databases, make migrations and start the Django server 
    ```
    $ cd backend 
    $ python manage.py makemigrations
    $ python maange.py migrate
    ```

    - After the migrations have been successfully made, run the server 
    ```
    $ cd ..
    $ python manage.py 

    # NOTE : The manage.py file is inside the root directory of the project and not in the backend/ directory. So change the directory location before you run the server, else you may get the error - 'manage.py file not found' 
    ```

6. Installing the dependencies of the frontend
    ```
    $ cd frontend
    $ npm install 
    ```

7. After successfull installation of the node_modules, start the react application
    ```
    $ npm start
    ```

8. The frontend application will run on the url : ``` http://localhost:3000 ```
9. The Django server will run on the url : ``` http://localhost:8000 ```

## Technologies used 
- [X] Reactjs 
- [X] Redux Toolkit/Redux
- [X] Django 
- [X] Django Rest Framework
- [X] SQLite 
<br/>

### About the Technologies
1. ReactJS : ReactJS is a library developed by Facebook to develop user interfaces. ReactJS aims at providing modular code which is what I have kept in mind while designing the frontend code. Below are the libraries that I have used to add more features to frontend.
    * React-Router : React-router is a Javscript framework which is used to handle client-server side routing in React applications. Below are the routes that I have used.
    Base url used by React : http://localhost:3000/<br/>
    1. `signin/` : Routes to Signin/Register page.
    2. `try/` : Routes the main application.
    <br/>

    * React-Redux/Redux-Toolkit : React-Redux is a predictable store container library for React. For the overall development, I have used Redux-toolkit which is a set of tools to simplify react-redux development. Below are the details of all the values, actions of reducers and thunks used.
    The store of the React app is the `src/store.js` file.
    The store is divided in 5 slices.
    <br/>
    Slices <br/>
    1. SigninReducer : <br/>
                    values : signed<br/>
                    actions : signinSuccess , signinFail <br/><br/>
    2. UserReducer : <br/>
                    values : username, status, message, showUserSettings<br/>
                    actions : setShowUserSettings<br/><br/>
    3. MatrixToggleReducer : <br/>
                    values : cardOne, cardTwo, cardThree, cardFour<br/>
                    actions : cardOneToggle, cardTwoToggle, cardThreeToggle, cardFourToggle<br/><br/>
    4. TaskReducer : <br/>
                    values : quadrant, type, content, showTask, showAllTasks, allTasks<br/>
                    actions : setShowTask, setShowAllTasks<br/>
                    extraReducers : addTask, getAllTasks<br/><br/>
    5. NoteReducer : <br/>
                    values : note, cardOneNotes, cardTwoNotes, cardThreeNotes, cardFourNotes<br/>
                    actions : appendCardOneNotes, appendCardTwoNotes, appendCardThreeNotes, appendCardFourNotes<br/>
    
    1. SigninReducer > signinSuccess :
    Sets the signed value to true ( user gets signed in )

    2. SigninReducer > signinFalse :
    Sets the signed value to false ( user gets signed out )

    3. UserReducer > setShowUserSettings : 
    Toggles between true and false. When the user clicks on the user profile, this action is performed and a list is rendered which has the options : Signout and Profile

    4. MatrixToggleReducer :
    Toggles boolean values of cardOne, cardTwo, cardThree and cardFour. These 4 cards are : Do it, Schedule, Delegate, Eliminate respectively.

    5. TaskReducer > setShowTask : 
    When the user clicks on a card, the a window appears on the right which asks the user to create a new task. This is a boolean value

    6. TaskReducer > setShowAllTasks :
    Toggles when the 'show all Tasks' button is clicked

    7. NoteReducer > appendCardOneNotes : 
    When a new task is created, it is given 3 values - quadrant, type and content. The quadrant is the number of the card. The type is the type of task selected. The content is the actual task written by the user. An object containing the 3 values is created and appended in the cardOneNotes array. appendCardTwoNotes, appendCardThreeNotes, appendCardFourNotes also works in the same way but for different quadrants.

    <br/>
    For fetching of server and client-side data, instead of using a normal fetch() , axios() in the component code, I have exported this piece of asynchronous function in a thunk. A thunk is an asynchronous piece of code that handles promises and fetching actions.

    ```
    Thunks
    1. RegisterThunk : loginUser, RegisterUser
    2. TaskThunk : addTask, getAllTasks

    ```  

    1. RegisterThunk > loginUser : 
    Performing GET request to the backend API and sending the email and password to search for a user in the database.
    api endpoint : register/        
    request method : GET 

    2. RegisterThunk > RegisterUser 
    Performing POST request to the backend API. Sends the user register info.
    api endpoint : register/
    request method : POST

    3. TaskThunk > addTask : 
    Performs POST request to the backend API. Sends the task details : quadrant, type, content to the backend.
    api endpoint : tasklist/
    request method : POST

    4. TashThunk > getAllTasks : 
    Performs GET request to the backend API. Obtains all the tasks.
    api endpoint : tasklist/
    request method : GET


    `Pages` foler contains : Signin.jsx which is rendered when a user signsin/registers

2. Frontend Libraries 
Libraries used : 
    1. Bootstrap , Material UI : Provides CSS templates for various html elements and components. Helped in reducing writing lots of CSS code for styling. Styling can be done by just adding/removing/changing classNames. It saved a lot of time.
    2.  Framer-motion : Provides cool animations which make the transitions, popups, sliders look visually attractive. This library provides templates which saves a lot of time writing CSS code.

3. Assets
All the images have been downloaded from <a href = "https://icons8.com/">icons8</a> website.

4. Fetching Libraries 
    1. axios : axios is a HTTP client for Javascript. Request and Response handling is simpler when axios is used. Used to communicate with backend

5. Django : 
Django is a Python framework that follows models-templates-view architecture. Here is an overview of the contents of the `main` app folder. The Django application runs on http://127.0.0.1:8000.
    ```
    1. models.py : Contains User model to store user data and Task model to store the details of a task.
    2. urls.py : Endpoints : register/ , taskdetails/ 
    3. serializers.py : Contains serializer classes for User and Task model
    4. views.py : Contains API Views 
    5. admin.py : Registers User and Task models
    ```

6. Django Rest Framework ( DRF )


## Video Demonstration of the Application
[screen-recorder-fri-apr-28-2023-00-46-43.webm](https://user-images.githubusercontent.com/76089814/234968688-ac010206-1d66-4236-9041-404d345f80e7.webm)




### New ideas to implement/bugs to be removed
- [ ] 1. When notes are dragged into a card, change the card type of the note
- [ ] 2. Use firebase authentication
- [X] 3. bug: Update the user in the top right bar
- [X] 4. User should be able to signout by himself
- [ ] 5. Creating a project, maintaining a record of all the projects with its content
- [ ] 6. Feature to add images into the notes
- [ ] 7. bug: Sign in/Sign up button when clicked, styling gets glitched
- [ ] 8. Saving the versions of the project when the save button is clicked and moving back to previous verisons of the project
- [X] 9. Zoom in/Zoom out 
- [X] 10. Creating a list of all the current tasks in the tasklist -> on selecting a task -> should be able to update the task and then save it again -> with changes reflected in the store and in the database
- [X] 11. UI and styling all the components
- [ ] 12. On reloading the user should not get signed out, imply a session storage or something
- [ ] 13. Feature for multiple users to work on multiple projects
- [ ] 14. bug: card one and card two notes get behind card three and card four -> should be on the top of them
- [X] 15. Remove the venv from the repo and hide the sercret key. Create a requirements.txt file
- [X] 16. Use Authentication provided by Django
- [X] 17. Updation and Deletion of the Task
- [X] 18. On Task deletion, the taskList does not get rendered
- [X] 19. On Task deletion, delete the note that is attached to that task
- [X] 20. bug: The updateTaskBoolean value does not get updated before the Task.jsx renders, which gives a false value. It should instead give true
- [ ] 21. Generate all notes when the app is started




## Created by
Atharva Pingale : https://github.com/atharva0300

##Table of Contents

1. [AUTH ROUTES ](#AUTH-ROUTES)
2. [POST ROUTES ](#POST-ROUTES)
3. [RESPONSE ROUTES ](#RESPONSE-ROUTES)
4. [USER ROUTES ](#USER-ROUTES)
5. [UPLOAD ROUTES ](#UPLOAD-ROUTES)


## AUTH ROUTES

| HTTP Method  |  URI PATH | DESCRIPTION |
| ---------- | ---------- | ---------- |
| POST |api/auth/signup |Signup user|
| POST| api/auth/login   | Login user|
| GET| api/auth/verify |Verify Auth Token|


## POST ROUTES

| HTTP VERB  |  URI PATH | DESCRIPTION |
| ---------- | ---------- | ---------- |
| POST |/api/post/|Create a new Post|
| GET|/api/post/| Retrieve all Posts|
| GET|/api/post/:postId |get post details|
| PUT|/api/post/:postId|Edit the specific post|
| DELETE|/api/post/:postId|Deletes the specific post|
| PUT|/api/post/add-fav|añade el post como favorito del user|
| PUT|/api/post/remove-fav|elimina el post como favorito del user|


## RESPONSE ROUTES 

| HTTP VERB  |  URI PATH | DESCRIPTION |
| ---------- | ---------- | ---------- |
| POST |/api/response/|Place a new comment in the response section|
| GET|/api/reponse/| Retrieve all responses (not in use at the moment, but maybe will be used for last x comments)|
| GET|/api/response/post/:postId | retrieve the responses from the specific post|
| GET|/api/response/:responseId|get response details |
| PUT|/api/response/:responseId|Edit the specific comment|
| DELETE|/api/response/:responseId|Deletes the specific comment|

## USER ROUTES

| HTTP VERB  |  URI PATH | DESCRIPTION |
| ---------- | ---------- | ---------- |
| GET|/api/user/:userId| get user details, nevertheles we can get the details from the user context|
| GET|/api/user/:userId/favs |get user favs|
| GET|/api/user/:userId/all-favs |get all favs from users |

## UPLOAD ROUTES

| HTTP VERB  |  URI PATH | DESCRIPTION |
| ---------- | ---------- | ---------- |
| POST |/api/upload/image|upload images to cloudinary|

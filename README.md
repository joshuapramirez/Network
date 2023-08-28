# Network

Social network app, offering users a platform to share posts, engage with content, and connect with others in a manner reminiscent of the original Twitter experience

## Table of Contents

- [Description](#Description)
- [Features](#Features)
- [Installation](#Installation)
- [How to run](#How to run)
- [Distinctiveness and Complexity](#Distinctiveness and Complexity)
- [Files](#Files)


## Description
I have crafted a social networking platform that emulates the essence of Twitter, providing users with a space to share their thoughts, engage with content, and connect with others. This user-focused application delivers a familiar experience akin to the original Twitter, facilitating effortless posting, liking, and following functionalities. Users can navigate posts with ease, and the intuitive design promotes seamless interactions, encouraging meaningful connections and conversations. Dynamic features like real-time liking and pagination ensure a fluid user experience, resembling the dynamics of a vibrant social network.


## Features
-User Account Creation
-Authentication and User Management
-User Profiles
-Discover Feed
-Following Feed
-Posting and Editing
-Likes and Interactions


### Installation
pip3 install django


### How to run
1. cd network_app
2. python manage.py runserver


## Files
styles.css - CSS defining the application's base appearance.
functions.js - Contains JavaScript functions that enable dynamic interactions, such as handling post edits, toggling likes, and updating like counts.
views.py - Implements Python functions for various operations, including managing likes, handling posts, following interactions, user profiles, user authentication, and user registration.
layout.html - Provides the overall application layout.
register.html - User account creation page.
login.html - User login page.
profile.html - Presents user profile information, including follower and following counts.  It displays posts associated with the profile, and allows the authenticated user to follow/unfollow.
index.html - Displays all posts in a user-centric interface. Authenticated users can create new posts, view and like existing posts, and edit their own posts using modals.
following.html - Displays posts from users that the current user is following.
models.py - Defines the data models for the application. It includes classes for User, Post, Follow, and Like.
urls.py - Manages all application URLs.
admin.py - Facilitates the administration interface for managing application data models.
settings.py - Contains configuration settings for the Django project. It includes settings for database connections, middleware, templates, authentication, internationalization, time zones, and static files handling.
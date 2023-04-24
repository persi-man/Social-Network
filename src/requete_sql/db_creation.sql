CREATE DATABASE social_network;

USE social_network;

CREATE TABLE User (
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);

CREATE TABLE Post (
    post_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    picture_url VARCHAR(255),
    video_url VARCHAR(255),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (post_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Comment (
    comment_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    content TEXT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (comment_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id)
);

CREATE TABLE Likes (
    like_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (like_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id)
);

CREATE TABLE Like_comment (
    like_comment_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    comment_id INT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (like_comment_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (comment_id) REFERENCES Comment(comment_id)
);

CREATE TABLE Picture (
    picture_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    picture_url VARCHAR(255) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (picture_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Category (
    category_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (category_id)
);

CREATE TABLE Video (
    video_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    video_url VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (video_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

CREATE TABLE Follow (
    follow_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    follower_id INT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (follow_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (follower_id) REFERENCES User(user_id)
);

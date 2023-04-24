USE social_network;

INSERT INTO User (username, email, password, date_created, updatedAt) VALUES 
('Monkey D. Luffy', 'luffy@onepiece.com', 'password', NOW(), NOW()),
('Roronoa Zoro', 'zoro@onepiece.com', 'password', NOW(), NOW()),
('Nami', 'nami@onepiece.com', 'password', NOW(), NOW()),
('Usopp', 'usopp@onepiece.com', 'password', NOW(), NOW()),
('Sanji', 'sanji@onepiece.com', 'password', NOW(), NOW());

INSERT INTO Post (user_id, categoryId, title, content, date_created, updatedAt) VALUES 
(1, 1, 'Luffy Funny Post', 'This is a funny post by Luffy', NOW(), NOW()),
(2, 2, 'Zoro Action Post', 'This is an action post by Zoro', NOW(), NOW()),
(3, 3, 'Nami Drama Post', 'This is a drama post by Nami', NOW(), NOW()),
(4, 4, 'Usopp Horror Post', 'This is a horror post by Usopp', NOW(), NOW()),
(5, 5, 'Sanji Romance Post', 'This is a romance post by Sanji', NOW(), NOW());

INSERT INTO Comment (user_id, post_id, content, date_created, updatedAt) VALUES 
(1, 1, 'This is a comment by Luffy on his own post', NOW(), NOW()),
(2, 1, 'This is a comment by Zoro on Luffy post', NOW(), NOW()),
(3, 2, 'This is a comment by Nami on Zoro post', NOW(), NOW()),
(4, 2, 'This is a comment by Usopp on Zoro post', NOW(), NOW()),
(5, 3, 'This is a comment by Sanji on Nami post', NOW(), NOW());

INSERT INTO Likes (user_id, post_id, date_created, updatedAt) VALUES 
(1, 2, NOW(), NOW()),
(2, 3, NOW(), NOW()),
(3, 1, NOW(), NOW()),
(4, 1, NOW(), NOW()),
(5, 2, NOW(), NOW());

INSERT INTO Picture (user_id, url, category_id, date_created, updatedAt) VALUES 
(1, 'https://example.com/luffy-post1-pic1.jpg',1, NOW(), NOW()),
(2, 'https://example.com/zoro-post2-pic1.jpg',2, NOW(), NOW()),
(3, 'https://example.com/nami-post3-pic1.jpg',1, NOW(), NOW()),
(4, 'https://example.com/usopp-post4-pic1.jpg',2, NOW(), NOW()),
(5, 'https://example.com/sanji-post5-pic1.jpg',3, NOW(), NOW());

INSERT INTO Video (post_id, url,category_id, date_created,  updatedAt) VALUES 
(1, 'https://example.com/luffy-post1-video.mp4',2, NOW(), NOW()),
(2, 'https://example.com/zoro-post2-video.mp4',2, NOW(), NOW()),
(3, 'https://example.com/nami-post3-video.mp4',1, NOW(), NOW()),
(4, 'https://example.com/usopp-post4-video.mp4',3, NOW(), NOW()),
(5, 'https://example.com/sanji-post5-video.mp4' ,1, NOW(),NOW());

INSERT INTO Follow (follower_id, follow_id, date_created, updatedAt) VALUES 
(1, 2, NOW(), NOW()),
(1, 3, NOW(), NOW()),
(2, 1, NOW(), NOW()),
(2, 4, NOW(), NOW()),
(3, 2, NOW(), NOW());

INSERT INTO LikeComment (userId, commentId, date_created) VALUES 
(1, 2, NOW()),
(2, 3, NOW()),
(3, 1, NOW()),
(4, 1, NOW()),
(5, 2, NOW());

INSERT INTO Category (name) VALUES 
('Funny'),
('Action'),
('Drama'),
('Horror'),
('Romance');


-- +migrate Up
CREATE TABLE role(
  id text NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  code VARCHAR(255) NOT NULL,
  created_date TIMESTAMP NULL,
  modified_date TIMESTAMP NULL,
  created_by VARCHAR(255) NULL,
  modified_by VARCHAR(255) NULL
);

CREATE TABLE users (
  id text NOT NULL PRIMARY KEY,
  email VARCHAR(150) NOT NULL,
  username VARCHAR(150) NOT NULL,
  password VARCHAR(150) NOT NULL,
  full_name VARCHAR(150) NULL,
  avatar_url VARCHAR(255) NULL,
  cover_url VARCHAR(255) NULL,
  status int NOT NULL,
  role_id text NOT NULL,
  created_date TIMESTAMP NULL,
  modified_date TIMESTAMP NULL,
  created_by VARCHAR(255) NULL,
  modified_by VARCHAR(255) NULL
);


ALTER TABLE users ADD CONSTRAINT fk_user_role FOREIGN KEY (role_id) REFERENCES role(id);


-- CREATE TABLE repo (
--     id text NOT NULL PRIMARY KEY,
--     name VARCHAR(255) NULL,
--     description TEXT NULL,
--     content TEXT NULL,
--     created_date TIMESTAMP NULL,
--     modified_date TIMESTAMP NULL,
--     created_by VARCHAR(255) NULL,
--     modified_by VARCHAR(255) NULL
-- );
--
-- CREATE TABLE "bookmarks" (
--   "bid" text PRIMARY KEY,
--   "user_id" text,
--   "repo_name" text,
--   "created_at" TIMESTAMPTZ NOT NULL,
--   "updated_at" TIMESTAMPTZ NOT NULL,
--   unique (user_id, repo_name)
-- );
--
-- ALTER TABLE "bookmarks" ADD FOREIGN KEY ("repo_name") REFERENCES "repos" ("name");

CREATE TABLE  images (
    id text NOT NULL PRIMARY KEY,
    name VARCHAR(255) NULL,
    description TEXT NULL,
    size INTEGER NOT NULL ,
    type TEXT NOT NULL,
    created_date TIMESTAMP NULL,
    modified_date TIMESTAMP NULL,
    created_by VARCHAR(255) NULL,
    modified_by VARCHAR(255) NULL
);


CREATE TABLE news (
  id text NOT NULL PRIMARY KEY,
  title VARCHAR(255) NULL,
  thumbnail VARCHAR(255) NULL,
  short_description TEXT NULL,
  content TEXT NULL,
  category_id text NOT NULL,
  created_date TIMESTAMP NULL,
  modified_date TIMESTAMP NULL,
  created_by VARCHAR(255) NULL,
  modified_by VARCHAR(255) NULL
);

CREATE TABLE category (
  id text NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  code VARCHAR(255) NOT NULL,
  created_date TIMESTAMP NULL,
  modified_date TIMESTAMP NULL,
  created_by VARCHAR(255) NULL,
  modified_by VARCHAR(255) NULL
);

ALTER TABLE news ADD CONSTRAINT fk_news_category FOREIGN KEY (category_id) REFERENCES category(id);

CREATE TABLE comment (
  id text NOT NULL PRIMARY KEY,
  content TEXT NOT NULL,
  user_id text NOT NULL,
  new_id text NOT NULL,
  created_date TIMESTAMP NULL,
  modified_date TIMESTAMP NULL,
  created_by VARCHAR(255) NULL,
  modified_by VARCHAR(255) NULL
);

ALTER TABLE comment ADD CONSTRAINT fk_comment_users FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE comment ADD CONSTRAINT fk_comment_news FOREIGN KEY (new_id) REFERENCES news(id);
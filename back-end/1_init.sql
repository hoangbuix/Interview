-- +migrate Up
CREATE TABLE "users" (
  "user_id" text PRIMARY KEY,
  "full_name" text,
  "avatar" text,
  "email" text UNIQUE,
  "password" text,
  "role" text,
  "created_at" TIMESTAMPTZ NOT NULL,
  "updated_at" TIMESTAMPTZ NOT NULL
);

create table "major" (
    "major_id" text primary key,
    "major_name" text,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL
)

create table class (
    "class_id" text primary key,
    "major_id" text,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL
)

create table "mentor" (
    "mentor_id" text primary key,
    "user_id" text,
    "topic_id" text,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL
)

create table "topic" (
    "topic_id" text primary key,
    "topic_name" text,
    "description" text,
    "url" text,
    "major_id": text,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL
)

create table "image" (
    "image_id" text,
    "image_name" text,
    "size" integer ,
    "type" text,
    "created_at" TIMESTAMPTZ NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL
)


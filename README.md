# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :groups, through: :groups-users
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
|username|string|null: false|
### Association
- has_many :users, through: :groups-users
- has_many :messages

## groups-usersテーブル
|Column|Type|Options|
|------|----|-------|
|user-id|integer|null:false,foreign_key: true|
|group-id|integer|null:false,foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null:false|
|image|string|null:false|
|user-id|integer|null:false,foreign_key: true|
|group-id|integer|null:false,foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


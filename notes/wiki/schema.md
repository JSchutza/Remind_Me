






-----------------------------------------------------------

# Users
| column name    | data type     | details               |
|----------------|---------------|-----------------------|
| id             | int.          | not null, primary key |
| user_name      | varchar(45)   | not null              |
| email          | email(100)    | not null, unique      |
| hased_password | varbinary(255)| not null              |




-----------------------------------------------------------



# Notebooks
| column name    | data type     | details               |
|----------------|---------------|-----------------------|
| id             | int.          | not null, primary key |
| name           | varchar(100)  | not null              |
| description    | varchar(255)  | allowNull: true       |
| notebook_owner | int           | not null, FK          |


-----------------------------------------------------------


# Notes
| column name    | data type     | details               |
|----------------|---------------|-----------------------|
| id             | int.          | not null, primary key |
| due_date       | date          | allowNull: true       |
| title          | string(100)   | not null              |
| content        | text          | allowNull: true       |
|notebook_id     | int           | not null, FK          |

-----------------------------------------------------------


# Tags
| column name    | data type     | details               |
|----------------|---------------|-----------------------|
| id             | int.          | not null, primary key |
| name           | string(100)   | not null, unique      |
| creator_id     | int           | not null, FK          |
| note_id        | int           | not null, FK          |


-----------------------------------------------------------

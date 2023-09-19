# Routes

# Get all posts

### Route: /posts

##### Request Methods: GET

##### Response:

Array of Post Objects in JSON format

```
{
    data: [
        {
            id: 1
            created: "2023-09-19 18:56:47"
            title: "example title"
            content: "example content"
        },
        ...
        {
            id: 9
            created: "2023-09-19 20:56:47"
            title: "example title"
            content: "example content"
        }
    ]
}
```

# Get a post

### Route: /post/{postId}

##### Request Methods: GET

params:

```
postID: int. Required
The id of the post
```

##### Response:

Post Objects in JSON format

```
{
    data: {
        id: 1
        created: "2023-09-19 18:56:47"
        title: "example title"
        content: "example content"
    },
}
```

# Create a post

### Route: /post

##### Request Methods: POST

params: none
body:

```
title: string. Required
The title of the post

content: string. Required
The content of the post
```

##### Response:

```
Status Code: 200
```

# Update a post

### Route: /post/{postId}

##### Request Methods: PUT

params:

```
postID: int. Required
The id of the post
```

body:

```
title: string. Required
The title of the post

content: string. Required
The content of the post
```

##### Response:

```
Status Code: 200
```

# Delete a post

### Route: /post/{postId}

##### Request Methods: DELETE

params:

```
postID: int. Required
The id of the post
```

body: None

##### Response:

```
Status Code: 200
```

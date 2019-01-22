import { Injectable } from '@angular/core';

@Injectable()
export class PostQuery {

    constructor() { }

    listPostByStoryId(userId) {
        const query = `query {
            listPostByStoryId(storyId: "${userId}") {
                code
              result {
                _id
                storyId
                text
                url
                userId
                type
                type_access
                order
                location {
                    type
                    coordinates
                    address {
                        road
                        country
                    }
                }

              }
              message
            }
        }`;
        return query;
    }

    addNewPost(data) {
        const mutation = `mutation ($data: PostTypeInput!) {
            addNewPost(data: $data) {
              code
              result {
                storyId
                text
                url
                userId
                type
                type_access
                order
              }
              message
              error
            }
          }`;
        return {
            query: mutation,
            variables: { data: data }
        };
    }

    removePost(postId) {
        const query = `query { 
            removePost(postId: "${postId}") { 
                code
              result {
                storyId
                text
                url
                userId
                type
                type_access
                order
              }
              message
            }
            }`;
        return query;
    }

}

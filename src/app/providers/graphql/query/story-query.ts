import { Injectable } from '@angular/core';

@Injectable()
export class StoriesQuery {

  constructor() { }

  getStories() {
    const query = `query {
            getAllStories {
              code
              result {
                name
                description
                userId
                type
                date {
                    create
                  }
                cover
              }
              message
            }
        }`;
    return query;
  }

  createStory(data) {
    const mutation = `mutation ($data: StoryTypeInput!) {
        createStory(data: $data) {
          code
          result {
            _id
            name
            description
            userId
            type
            cover
            location {
              address {
                road
                town
                country
              } 
            }
            date { 
              create
            }
          }
          message
        }
      }`;
    return {
      query: mutation,
      variables: { data: data }
    };
  }

  listStoryByUserId(userId) {
    const query = `{
        listStoryByUserId(userId: "${userId}") {
          code
          result {
            _id
            name
            description
            userId
            type
            cover
            date {
              create
            }
            location{
              address {
                road
                town
                country
              }
            }
          }
          message
        }
      }`;
    return query;
  }

  listStoryByInterests(userId) {
    const query = `{
        listStoryByInterests(userId: "${userId}") {
          code
          result {
            _id
            name
            description
            userId
            type
            cover
            interests
            followed_by_me
            location {
              address {
                road
                country
              }
            }
          }
          message
          error
        }
      }`;
    return query;
  }

  followUnfollowStory(data) {
    const mutation = `mutation($userId: ID, $storyId: ID, $action:String) { 
        followUnfollowStory(userId: $userId, storyId: $storyId, action: $action) { 
         code
         result {
           _id
           name
           description
           userId
           type
           cover
         }
         error
         message
       }
       }`;
    return {
      query: mutation,
      variables: data
    };
  }


}

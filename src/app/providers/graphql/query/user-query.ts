import { Injectable } from '@angular/core';

@Injectable()
export class UserQuery {

  constructor() { }

  checkphoneNumber(phoneNumber: string) {
    const query = `query {   
            checkphoneNumberUser(mobileNumber: "${phoneNumber}") {
              code
              result {
                _id
                email
                mobileNumber
                smsCode
              }
              message
            }
        }`;
    return query;
  }

  confirmPhoneNumber(phoneNumber: string, smsCode: number) {
    const query = `query {   
        confirmPhoneNumber(mobileNumber: "${phoneNumber}", smsCode: "${smsCode}") {
          code
          result {
            _id
            email
            mobileNumber
            smsCode
          }
          message
        }
    }`;
    return query;
  }

  confirmPseudo(phoneNumber: string, pseudo: string) {
    const query = `query {   
      confirmPseudo(mobileNumber: "${phoneNumber}", pseudo: "${pseudo}"){
        code
        result {
          _id
          email
          mobileNumber
          smsCode
          username
        }
        message
      }
  }`;
  return query;
  }

  confirmEmail(phoneNumber: string, pseudo: string, email: string , password: string) {
    const query = `query {   
      confirmEmail(mobileNumber: "${phoneNumber}", pseudo: "${pseudo}", email: "${email}", password: "${password}"){
        code
        result {
          _id
          email
          mobileNumber
          smsCode
          username
        }
        message
      }
  }`;
  return query;
  }

  sentInterests(userId, interests) {
    const mutation = `mutation ($userId: ID!, $interests: [String]) {
      sendInterests(userId: ${userId}, interests: ${interests}) {
        code
        message
        result {
          interests
        }
      }
    }
    `;
      return {
          query: mutation,
          variables: {
            'userId': userId,
            'interests': interests
          }
      };
  }

}

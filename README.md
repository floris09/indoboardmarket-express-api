# Student Evaluation Tool API

Express API for [this](https://github.com/floris09/evaluation-tool-react) React application.

## Database Structure

1. Batch

  * batchNumber: string
  * startDate: date
  * endDate: date
  
2. Evaluation

  * date: date
  * color: string
  * remark: string
  * student_id: objectId
  
3. Student

  * name: string
  * imageUrl: string
  * batch_id: objectId
  * color: string
  
4. User
  
  * name: string
  * email: string
  * createdAt: date
  * updatedAt: date

## Running Locally

Make sure you have [MongoDB](https://docs.mongodb.com/),[Yarn](https://yarnpkg.com/en/) and [NodeJS](https://nodejs.org/en/) installed. Setup and run [React Evaluation Tool](https://github.com/floris09/evaluation-tool-react).

```bash
git clone git@github.com:floris09/evaluation-tool-api.git
cd evaluation-tool-api
yarn install
yarn start
yarn run seed
```

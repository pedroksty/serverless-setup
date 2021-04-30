import { APIGatewayProxyHandler } from 'aws-lambda'

const api = 'KJSDKJ'

export const handle: APIGatewayProxyHandler = async event => {
  const data = event.body

  return {
    statusCode: 200,
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

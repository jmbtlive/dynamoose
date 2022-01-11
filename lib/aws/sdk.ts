const AWS = require("aws-sdk/lib/core");
import * as DynamoDB from "aws-sdk/clients/dynamodb";

export const config = AWS.config;
export { DynamoDB };
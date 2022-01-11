import * as DynamoDB from "aws-sdk/clients/dynamodb";

let customDDB: DynamoDB | undefined;
function main (): DynamoDB {
	return customDDB || new DynamoDB();
}
main.set = (ddb: DynamoDB): void => {
	customDDB = ddb;
};
main.revert = (): void => {
	customDDB = undefined;
};
main.local = (endpoint = "http://localhost:8000"): void => {
	main.set(new DynamoDB({
		endpoint
	}));
};

export = main;

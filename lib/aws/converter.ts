import * as DynamoDB from "aws-sdk/clients/dynamodb";

let customConverter: typeof DynamoDB.Converter | undefined;
function main (): typeof DynamoDB.Converter {
	return customConverter || DynamoDB.Converter;
}
main.set = (converter: typeof DynamoDB.Converter): void => {
	customConverter = converter;
};
main.revert = (): void => {
	customConverter = undefined;
};

export = main;

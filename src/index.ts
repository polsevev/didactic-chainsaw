//import * as babelparser from "../babel/packages/babel-parser";
import * as babelparser from "@babel/parser";
//import core from "../babel/packages/babel-core";
import { parse_with_plugins } from "./parser/parse";
import {
    SelfHostedRecipe,
    TransformRecipe,
    transform,
} from "./transform/transform";
import { readdir } from "node:fs/promises";
import { parseJSTQL } from "./langium/langiumRunner";

import { parseArgs } from "util";

const options = {
    o: {
        type: "string",
    },
};

const { values: argVals, tokens: positional } = parseArgs({
    options,
    tokens: true,
    allowPositionals: true,
});
const main = async () => {
    //transform(selfHostedTransformExampleMultiStmt, codeFromFile);
    console.log(positional);
    if (!positional[0] || !positional[0].value.endsWith(".jstql")) {
        throw new Error("First positional argument is current JSTQL file");
    }
    if (!positional[1] || !positional[1].value.endsWith(".js")) {
        throw new Error(
            "Second positional argument is JS code to be transformed"
        );
    }
    const jstql_file = positional[0].value;
    const code_file = positional[1].value;

    let jstqlString = await Bun.file(jstql_file).text();
    let codeString = await Bun.file(code_file).text();

    let parsedJSTQL = await parseJSTQL(jstqlString);

    for (let proposal of parsedJSTQL) {
        let [resultString, matches] = transform(proposal.cases, codeString);

        let path = "./";
        if (argVals["o"]) {
            path = argVals["o"];
        }
        Bun.write(path, resultString);
    }
};

main();

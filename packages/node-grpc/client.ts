import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import readline from "readline";

import { ProtoGrpcType } from "./proto/random";
import { ChatResponse } from "./proto/randomPackage/ChatResponse";

const PORT = 8082;
const PROTO_FILE = "./proto/random.proto";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const client = new grpcObj.randomPackage.Random(
  `0.0.0.0:${PORT}`,
  grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);

client.waitForReady(deadline, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReady();
});

function onClientReady() {
  // client.PingPong({ message: "Ping" }, (err, result) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(result);
  // });

  // const stream = client.RandomNUmbers({ maxValue: 85 });
  // stream.on("data", (chunk) => {
  //   console.log(chunk);
  // });
  // stream.on("end", () => {
  //   console.log("Communication ended...");
  // });

  // const stream = client.TodoList((err, result) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(result);
  // });
  // const todos = [
  //   { todo: "Learn GRPC", status: "doing" },
  //   { todo: "Learn Node", status: "done" },
  //   { todo: "Learn TypeScript", status: "done" },
  //   { todo: "Learn Golang", status: "doing" },
  // ];
  // todos.forEach((todo) => {
  //   stream.write(todo);
  // });
  // stream.end();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const username = process.argv[2];
  if (!username) console.log("No username, can't join chat :("), process.exit();
  const metadata = new grpc.Metadata();
  metadata.set("username", username);

  const call = client.Chat(metadata);
  call.write({
    message: "register",
  });
  call.on("data", (chunk: ChatResponse) => {
    console.log(`${chunk.username} ==> ${chunk.message}`);
  });

  rl.on("line", (line) => {
    if (line === "quit") {
      call.end();
    } else {
      call.write({
        message: line,
      });
    }
  });
}

import { Worker } from "@temporalio/worker";

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve("./myWorkflow.ts"),
    taskQueue: "example",
  });
  worker.run();
}

run().catch((err) => {
  console.log(err);
  process.exit(1);
});

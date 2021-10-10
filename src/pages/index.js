import Head from "next/head";
/* Components */
import { useTask } from "../context/TaskContext";
import AddTask from "../components/AddTask";
import Task from "../components/Task";

export default function Home() {
  const { tasks } = useTask();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Your tasks: {tasks.length}</p>
      <Task />
      <AddTask />
    </div>
  );
}

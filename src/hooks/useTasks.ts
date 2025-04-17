import { useContext } from "react";
import { TasksContext } from "../contexts/TaskContexts";


export const useTasks = () => {
    return useContext(TasksContext)
}
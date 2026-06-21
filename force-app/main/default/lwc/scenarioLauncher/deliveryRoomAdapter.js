export const createEmptyTaskResults = () => ({});

export const normalizeAgentTaskResult = (task, output) => ({
  taskId: task.id,
  agentKey: task.agentKey,
  taskName: task.taskName,
  output
});

// This local adapter is the replacement seam for future Agentforce/Data Cloud-backed task execution.
export const executeLocalOrchestrationPlan = ({ plan, runRoleAgentTask }) =>
  plan.tasks.reduce((results, task) => {
    const output = runRoleAgentTask({
      agentKey: task.agentKey,
      taskName: task.taskName,
      context: task.context
    });

    return {
      ...results,
      [task.resultKey]: normalizeAgentTaskResult(task, output)
    };
  }, createEmptyTaskResults());

export const getTaskOutput = (taskResults, resultKey) =>
  taskResults[resultKey]?.output;

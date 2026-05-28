type WorkflowStepperProps = {
  steps: readonly string[];
  className?: string;
};

export function WorkflowStepper({ steps, className = "" }: WorkflowStepperProps) {
  return (
    <nav className={`rw-workflow-stepper ${className}`} aria-label="Private model workflow">
      <ol className="rw-workflow-stepper-list">
        {steps.map((step, index) => {
          const marker = index === steps.length - 1 ? "OPS" : `0${index + 1}`;

          return (
            <li className="rw-workflow-stepper-item" key={step}>
              <span className="rw-workflow-stepper-marker">{marker}</span>
              <span className="rw-workflow-stepper-title">{step}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

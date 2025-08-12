interface StepCounterProps {
  currentStep: number // starts from 1
  totalSteps: number
}

export default function StepCounter({ currentStep, totalSteps }: StepCounterProps) {
  const startStep = 3
  const displayStep = startStep + currentStep - 1

  return (
    <span className="text-blue-600 font-semibold text-lg text-[20px]">
      Step {displayStep}
      <span className="text-gray-500">/{totalSteps}</span>
    </span>
  )
}

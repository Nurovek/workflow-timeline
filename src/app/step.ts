export interface Step {
  stepNumber: number,
  stepName: string,
  isActive?: boolean,
  isFinished?: boolean,

  stepInformations?: {
    targetProfile?: string,
    status?: string,
    processedBy?: string,
    statusDate?: number
  }
}
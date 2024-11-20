export default function buildError(error: Error, status: number) {
  return {
    timeStamp: Date.now(),
    message: error.message,
    status: status
  }
}
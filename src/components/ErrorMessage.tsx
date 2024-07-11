interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorMessage = ({
  message = "Something went wrong",
  onRetry,
}: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">Oops!</h1>
        <p className="mt-2 text-lg text-gray-700">{message}</p>
        {onRetry && (
          <button
            className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={onRetry}
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

import { FC, ReactNode } from 'react';

interface ErrorComponentProps {
  message: string; // The main error message
  description: string; // A description or additional information about the error
  image?: string | ReactNode; // An optional image to display with the error
  className?: string; // Additional CSS class for styling
}

// ErrorComponent displays an error message with optional image and description
export const ErrorComponent: FC<ErrorComponentProps> = ({
  message,
  description,
  image,
  className,
}) => {
  return (
    <ErrorContainer className={className}>
      <ErrorImage image={image} />
      <ErrorMessage message={message} />
      <ErrorDescription description={description} />
      <ErrorLink />
    </ErrorContainer>
  );
};

// Props for the ErrorContainer
interface ErrorContainerProps {
  children: ReactNode; // The content to display inside the container
  className?: string; // Additional CSS class for styling
}

// ErrorContainer is a container for displaying error messages
export const ErrorContainer: FC<ErrorContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`flex min-h-[200px] w-full flex-col items-center justify-center gap-6 rounded-lg bg-background p-6 shadow-sm md:min-h-[300px] ${className}`}
    >
      {children}
    </div>
  );
};

// Props for the ErrorImage
interface ErrorImageProps {
  image?: string | ReactNode; // The image to display (either a string URL or a React component)
  className?: string; // Additional CSS class for styling
}

// ErrorImage displays an image for the error
export const ErrorImage: FC<ErrorImageProps> = ({ image, className }) => {
  return (
    <div className={className}>
      {image && typeof image === 'string' ? (
        <img src={image} className="h-12 w-12 text-primary" />
      ) : (
        image
      )}
    </div>
  );
};

// Props for the ErrorMessage
interface ErrorMessageProps {
  message: string; // The error message to display
  className?: string; // Additional CSS class for styling
}

// ErrorMessage displays the main error message
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className }) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">{message}</h2>
    </div>
  );
};

// Props for the ErrorDescription
interface ErrorDescriptionProps {
  description: string; // The description or additional information about the error
  className?: string; // Additional CSS class for styling
}

// ErrorDescription displays the description of the error
export const ErrorDescription: FC<ErrorDescriptionProps> = ({ description, className }) => {
  return (
    <div className={className}>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// ErrorLink displays a link to the homepage
export const ErrorLink: FC = () => {
  return (
    <div>
      <a
        href="/"
        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Go to Homepage
      </a>
    </div>
  );
};

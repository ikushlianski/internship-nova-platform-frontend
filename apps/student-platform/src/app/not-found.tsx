import { Metadata } from 'next';
import { ROUTES } from '@sharedroutes/routes';
import { Button } from '@componentsButton/Button';
import { ErrorContainer, ErrorMessage, ErrorDescription } from '@repo/ui/error';
import { ErrorIcon } from '@/components/icons/ErrorIcon';

export const metadata: Metadata = {
  title: '404 - Not Found',
  description: 'Page not found',
};

export default function NotFound() {
  return (
    <ErrorContainer className="gap-4 mt-0 m-auto">
      <ErrorIcon />
      <ErrorMessage message="404 Not Found" />
      <ErrorDescription description="The page you are looking for does not exist." />
      <center>
        <a href={ROUTES.HOME}>
          <Button variant={'default'} size={'lg'}>
            Main Page
          </Button>
        </a>
      </center>
    </ErrorContainer>
  );
}

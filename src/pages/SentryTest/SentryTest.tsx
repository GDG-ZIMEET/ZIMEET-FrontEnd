import * as Sentry from '@sentry/react';

const SentryTest = () => {
  return (
    <button onClick={() => {
            // Send a log before throwing the error
            Sentry.logger.info('User triggered test error', {
            action: 'test_error_button_click',
            });
            throw new Error('This is your first error!');
        }}
        >
        Break the world
    </button>
        
  );
}

export default SentryTest;
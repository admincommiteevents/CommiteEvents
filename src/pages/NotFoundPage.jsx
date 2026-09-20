import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/common/Button';
import ChromeObject3D from '../components/common/ChromeObject3D';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <PageContainer
      title="404 — Page Not Found | Commite Events"
      description="The requested page could not be found."
    >
      <section className="min-h-[80vh] flex flex-col items-center justify-center section-padding grid-background text-center select-none">
        <div className="mb-6">
          <ChromeObject3D variant="sphere" size={160} />
        </div>

        <span className="font-mono text-sm font-bold text-[var(--accent-primary)] uppercase tracking-widest mb-2">
          Error 404
        </span>

        <h1 className="display-1 font-bold uppercase text-[var(--text-primary)] mb-4">
          Page Not Found
        </h1>

        <p className="body-large text-[var(--text-secondary)] max-w-md mb-8">
          The page or route you are looking for has moved, been renamed, or does not exist.
        </p>

        <div className="flex items-center gap-4">
          <Button href="/" variant="primary" size="large" icon={Home}>
            Return Home
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};

export default NotFoundPage;

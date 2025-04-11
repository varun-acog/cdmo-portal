'use client';
import React from 'react';
import AnalyticsPage from '@/components/AnalyticsPage';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Analytics() {
  return (
    <ErrorBoundary>
      <AnalyticsPage />
    </ErrorBoundary>
  );
}

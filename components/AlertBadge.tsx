'use client';
import { AlertTriangle } from 'lucide-react';

interface AlertBadgeProps {
  count: number;
  type: string;
}

export default function AlertBadge({ count, type }: AlertBadgeProps) {
  return (
    <div className="flex items-center bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm">
      <AlertTriangle className="w-4 h-4 mr-1" />
      {count} new {type}
    </div>
  );
}

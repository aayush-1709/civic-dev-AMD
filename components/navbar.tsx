'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { getMockMode, setMockMode } from '@/lib/api';
import AIReportModal from './ai-report-modal';

interface NavbarProps {
  onMockModeChanged: () => void;
}

export default function Navbar({ onMockModeChanged }: NavbarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mockMode, setMockModeState] = useState(false);

  useEffect(() => {
    setMockModeState(getMockMode());
  }, []);

  const handleMockToggle = (checked: boolean) => {
    setMockMode(checked);
    setMockModeState(checked);
    onMockModeChanged();
  };

  return (
    <>
      <nav className="border-b border-slate-200 bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 sm:py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Left - Title and Status */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">CIVIC-DEV</h1>
              <p className="text-xs text-slate-500">Civic Intelligence Dashboard</p>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-900 text-[11px] sm:text-xs">
              Public Dashboard
            </Badge>
          </div>

          {/* Right - Actions */}
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
            <div className="flex items-center justify-between gap-2 border border-slate-200 rounded-md px-3 py-2">
              <span className="text-xs text-slate-600">Mock API</span>
              <Switch checked={mockMode} onCheckedChange={handleMockToggle} />
            </div>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white"
            >
              Generate AI Civic Report
            </Button>
          </div>
        </div>
      </nav>

      <AIReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

import React, { useState } from 'react';
import Accordion from '../sidebar/Accordion';
import BasicControls from '../sidebar/BasicControls';
import { AdjustmentsState } from '../../App';

interface RightSidebarProps {
  adjustments: AdjustmentsState;
  onAdjustmentChange: (adjustment: keyof AdjustmentsState, value: number) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ adjustments, onAdjustmentChange }) => {
  const [openSection, setOpenSection] = useState<string | null>('basic');

  return (
    <aside className="row-span-1 bg-panel-header border-l border-gray-700 p-4 w-72 overflow-y-auto">
      <div className="space-y-1">
        <div className="bg-gray-800 p-4 rounded-md mb-4">
          <h3 className="text-center text-gray-400">Histogram</h3>
          <div className="w-full h-20 bg-gray-700 rounded mt-2 flex items-center justify-center text-xs text-gray-500">
            (Placeholder)
          </div>
        </div>
        
        <Accordion title="BASIC" isOpen={openSection === 'basic'} onToggle={() => setOpenSection(openSection === 'basic' ? null : 'basic')}>
           <BasicControls 
              adjustments={adjustments}
              onAdjustmentChange={onAdjustmentChange}
           />
        </Accordion>
        <Accordion title="TONE CURVE" isOpen={openSection === 'tone'} onToggle={() => setOpenSection(openSection === 'tone' ? null : 'tone')}>
            <p className="text-gray-400 text-xs px-2 py-4">Tone Curve controls will be here.</p>
        </Accordion>
        <Accordion title="COLOR GRADING" isOpen={openSection === 'color'} onToggle={() => setOpenSection(openSection === 'color' ? null : 'color')}>
             <p className="text-gray-400 text-xs px-2 py-4">Color Grading controls will be here.</p>
        </Accordion>
        <Accordion title="DETAILS" isOpen={openSection === 'details'} onToggle={() => setOpenSection(openSection === 'details' ? null : 'details')}>
             <p className="text-gray-400 text-xs px-2 py-4">Details controls will be here.</p>
        </Accordion>
        <Accordion title="EFFECTS" isOpen={openSection === 'effects'} onToggle={() => setOpenSection(openSection === 'effects' ? null : 'effects')}>
             <p className="text-gray-400 text-xs px-2 py-4">Effects controls will be here.</p>
        </Accordion>
      </div>
    </aside>
  );
};

export default RightSidebar;
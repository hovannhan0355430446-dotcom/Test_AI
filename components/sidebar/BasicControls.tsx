import React from 'react';
import ControlSlider from './ControlSlider';
import { AdjustmentsState } from '../../App';

interface BasicControlsProps {
    adjustments: AdjustmentsState;
    onAdjustmentChange: (adjustment: keyof AdjustmentsState, value: number) => void;
}

const BasicControls: React.FC<BasicControlsProps> = ({ adjustments, onAdjustmentChange }) => {
    const formatDisplayValue = (value: number, isDecimal: boolean = false) => {
        if (isDecimal) {
            const decimalValue = (value / 100).toFixed(2);
            return value > 0 ? `+${decimalValue}` : decimalValue;
        }
        return value >= 0 ? `+${value}` : `${value}`;
    };

    return (
        <div className="space-y-4 px-2">
            <ControlSlider 
                label="Exposure"
                value={adjustments.exposure}
                onChange={(e) => onAdjustmentChange('exposure', Number(e.target.value))}
                displayValue={formatDisplayValue(adjustments.exposure / 50, true)} // Adjust display scaling
                onReset={() => onAdjustmentChange('exposure', 0)}
                min={-100}
                max={100}
            />
            <ControlSlider 
                label="Contrast"
                value={adjustments.contrast}
                onChange={(e) => onAdjustmentChange('contrast', Number(e.target.value))}
                displayValue={formatDisplayValue(adjustments.contrast)}
                onReset={() => onAdjustmentChange('contrast', 0)}
                min={-100}
                max={100}
            />
             <ControlSlider 
                label="Highlights"
                value={adjustments.highlights}
                onChange={(e) => onAdjustmentChange('highlights', Number(e.target.value))}
                displayValue={formatDisplayValue(adjustments.highlights)}
                onReset={() => onAdjustmentChange('highlights', 0)}
                min={-100}
                max={100}
            />
        </div>
    );
};

export default BasicControls;
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

interface SwitchMetricSystemProps {
    setIsImperialSystem: (isImperialSystem: boolean) => void,
    isImperialSystem: boolean
}

export default ({setIsImperialSystem, isImperialSystem} : SwitchMetricSystemProps) => {
    return (
        <RadioGroup row aria-label="position" name="position" className='switch-block'>
            <FormControlLabel
                checked={isImperialSystem}
                control={<Radio color="primary" />}
                label="Imperial system"
                labelPlacement="start"
                onChange={() => setIsImperialSystem(true)}
            />
            <FormControlLabel
                checked={!isImperialSystem}
                control={<Radio color="primary" />}
                label="Metric system"
                labelPlacement="start"
                onChange={() => setIsImperialSystem(false)}
            />
        </RadioGroup>
    )
}

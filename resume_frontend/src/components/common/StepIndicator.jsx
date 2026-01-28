import React from "react";

const StepIndicator = ({ currentStep }) => {
    return (
        <div className="flex justify-center mb-12">
            <div className="steps steps-horizontal">
                <div className={`step ${currentStep >= 1 ? "step-primary" : ""}`}>
                    <div className="step-circle">1</div>
                    <div className="step-label">AI Generation</div>
                </div>

                <div className={`step ${currentStep >= 2 ? "step-primary" : ""}`}>
                    <div className="step-circle">2</div>
                    <div className="step-label">Customize</div>
                </div>

                <div className={`step ${currentStep >= 3 ? "step-primary" : ""}`}>
                    <div className="step-circle">3</div>
                    <div className="step-label">Preview & Download</div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(StepIndicator);




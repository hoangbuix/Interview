import React from "react";
import "./ProgressTab.style.scss";

const ProgressTab = () => {
    return (
        <>
            <div className="progressTab">
                <div className="progress-tabmenu">
                    <ul className="nav" id="progressTab" role="tablist">
                        <li className="nav-item active"><a className="nav-link" id="formTab1" data-toggle="tab" href="#progressTab1" role="tab" aria-controls="progressTab1" aria-selected="true"><span>1</span></a></li>
                        <li className="nav-item"><a className="nav-link" id="formTab2" data-toggle="tab" href="#progressTab2" role="tab" aria-controls="progressTab2" aria-selected="false"><span>2</span></a></li>
                        <li className="nav-item"><a className="nav-link" id="formTab3" data-toggle="tab" href="#progressTab3" role="tab" aria-controls="progressTab3" aria-selected="false"><span>3</span></a></li>
                        <li className="nav-item"><a className="nav-link" id="formTab4" data-toggle="tab" href="#progressTab4" role="tab" aria-controls="progressTab4" aria-selected="false"><span>4</span></a></li>
                        <li className="nav-item"><a className="nav-link" id="formTab4" data-toggle="tab" href="#progressTab5" role="tab" aria-controls="progressTab5" aria-selected="false"><span>5</span></a></li>
                    </ul>
                </div>
                <div className="progress-tabbody">
                    <div className="tab-content" id="progressTabContent">
                        <div className="tab-pane fade show active" id="progressTab1" role="tabpanel" aria-labelledby="formTab1">
                            <h1>Tab1</h1>
                        </div>
                        <div className="tab-pane fade" id="progressTab2" role="tabpanel" aria-labelledby="formTab2">
                            <h1>Tab2</h1>
                        </div>
                        <div className="tab-pane fade" id="progressTab3" role="tabpanel" aria-labelledby="formTab3">
                            <h1>Tab3</h1>
                        </div>
                        <div className="tab-pane fade" id="progressTab4" role="tabpanel" aria-labelledby="formTab4">
                            <h1>Tab4</h1>
                        </div>
                        <div className="tab-pane fade" id="progressTab5" role="tabpanel" aria-labelledby="formTab5">
                            <h1>Tab5</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
export default ProgressTab;
import React from "react";

import BottomNavigation from "../../layout/BottomNavigation";

const Index = () => {
    return (
        <div>
            <div className="bottom-navigation">
                <BottomNavigation activeNum={2} />
            </div>
        </div>
    );
};

export default Index;
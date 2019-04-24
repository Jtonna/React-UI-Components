import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="headerTitle">
            <h2>Lambda School</h2>
            <p className="postData">@LambdaSchool • 26 jan</p>
            {/* normally this would be broken up into the handle and the date
            posted but for simplicitys sake were using it like this */}
        </div>
    )
}

export default HeaderTitle;


import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';

function HeaderContent() {
    return (
        <div>
        <div className="headerContent">
        <HeaderTitle />
            <p>
                Let's learn React by building simple interface with components.  Don't try to overthing it, just it simple and have fun.  Once you feel confortable using components you are well on your way to mastering React!
            </p>

        </div>
        </div>
    )
}

export default HeaderContent;
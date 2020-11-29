import React from 'react';

export interface ILayoutProps {
    children: React.ReactNode,
    footer: React.ReactNode,
    navigation: React.ReactNode
};

// enclosing other components
// used for style purposes mainly
const Layout = (props: ILayoutProps) => {
    /**
     * TODO maybe add the notification system
     * think about it
     * TODO maybe add the state varaibles in one state object
     */

    // TODO maybe there is a better way to conditional rendering *maybe create some more separation of components?
    return (
        <div className="wrapper">
            <div id="main-panel" className="main-panel">
                {props.navigation}
                {props.children}
                {props.footer}
            </div>
        </div>
    )

}

export default Layout;
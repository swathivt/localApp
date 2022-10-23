import React from 'react';


export class Footer extends React.Component {
    render() {

        const socialMediaLinks = [
            { cName: 'facebook', aLink: 'http://freewebsitetemplates.com/go/facebook/', linkName: 'facebook' },
            { cName: 'twitter', aLink: 'http://freewebsitetemplates.com/go/twitter/', linkName: 'twitter' },
            { cName: 'googleplus', aLink: 'http://freewebsitetemplates.com/go/googleplus/', linkName: 'googleplus' },
            { cName: 'pinterest', aLink: 'http://pinterest.com/fwtemplates/', linkName: 'pinterest' }
        ];

        const mediaLinks = socialMediaLinks.map(link => {
            return (
                <a href={'/' + link.aLink} className={link.cName}>{link.linkName}
                </a>
            )
        }
        );

        const footerSection = (
            <div id="footer">
                <div>
                    <div className="connect">
                        {mediaLinks}
                    </div>
                    <p>© 2023 Freeeze. All Rights Reserved.</p> 
                    <div style={{textAlign : "center"}} id='wix'></div>
                    

                </div>
            </div>

        );


        return <nav>{footerSection}</nav>;



    }
};
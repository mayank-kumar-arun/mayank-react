import React, { Fragment } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "./rds-banner.scss";


export interface RdsBannerProps {
    alignCenter?: boolean,
    bannerText?: string,
    sticky?: boolean,
    position?: "top" | "bottom",
    colorVariant?:
    "primary" |
    "secondary" |
    "success" |
    "danger" |
    "warning" |
    "info" |
    "light" |
    "dark"
}

const RdsBanner = (props: RdsBannerProps) => {


    const bannerColor = "alert alert-" + (props.colorVariant || 'primary');
    const classesCss: string =
        bannerColor
        + (props.sticky ?
            (props.position === 'top' ? ' fixed-top' : ' fixed-bottom bottom-0')
            : (props.position === 'top' ? ' sticky-top' : ' sticky-bottom')
          );


    return (
        <Fragment>

            {/* //These commented-out paras are only for visualising the working of elements
            //These can be removed  */}
            {/* <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos explicabo tenetur doloremque quia expedita odio reiciendis
                    ea ad quam nulla, tempora sint omnis nihil eius commodi debitis
                    dignissimos placeat, nisi minima soluta necessitatibus voluptates
                    architecto. Consequatur consectetur dignissimos recusandae eos fug
                    it maiores architecto ad dolorum exercitationem, quasi eius eaque.
                    Ipsa repellat ab autem quis minima? Asperiores obcaecati animi quo.
                    Recusandae vitae nobis consequuntur dicta voluptatum architecto!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos explicabo tenetur doloremque quia expedita odio reiciendis
                    ea ad quam nulla, tempora sint omnis nihil eius commodi debitis
                    dignissimos placeat, nisi minima soluta necessitatibus voluptates
                    architecto. Consequatur consectetur dignissimos recusandae eos fug
                    it maiores architecto ad dolorum exercitationem, quasi eius eaque.
                    Ipsa repellat ab autem quis minima? Asperiores obcaecati animi quo.
                    Recusandae vitae nobis consequuntur dicta voluptatum architecto!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos explicabo tenetur doloremque quia expedita odio reiciendis
                    ea ad quam nulla, tempora sint omnis nihil eius commodi debitis
                    dignissimos placeat, nisi minima soluta necessitatibus voluptates
                    architecto. Consequatur consectetur dignissimos recusandae eos fug
                    it maiores architecto ad dolorum exercitationem, quasi eius eaque.
                    Ipsa repellat ab autem quis minima? Asperiores obcaecati animi quo.
                    Recusandae vitae nobis consequuntur dicta voluptatum architecto!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos explicabo tenetur doloremque quia expedita odio reiciendis
                    ea ad quam nulla, tempora sint omnis nihil eius commodi debitis
                    dignissimos placeat, nisi minima soluta necessitatibus voluptates
                    architecto. Consequatur consectetur dignissimos recusandae eos fug
                    it maiores architecto ad dolorum exercitationem, quasi eius eaque.
                    Ipsa repellat ab autem quis minima? Asperiores obcaecati animi quo.
                    Recusandae vitae nobis consequuntur dicta voluptatum architecto!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos explicabo tenetur doloremque quia expedita odio reiciendis
                    ea ad quam nulla, tempora sint omnis nihil eius commodi debitis
                    dignissimos placeat, nisi minima soluta necessitatibus voluptates
                    architecto. Consequatur consectetur dignissimos recusandae eos fug
                    it maiores architecto ad dolorum exercitationem, quasi eius eaque.
                    Ipsa repellat ab autem quis minima? Asperiores obcaecati animi quo.
                    Recusandae vitae nobis consequuntur dicta voluptatum architecto!
                </p>
            </div> */}

            <div className={classesCss} role="alert">
                <div className={props.alignCenter ? 'text-center' : ''}>{props.bannerText}</div>
            </div>

            {/* //These commented-out paras are only for visualising the working of elements
            //These can be removed  */}
            {/* <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos explicabo tenetur doloremque quia expedita odio reiciendis
                    ea ad quam nulla, tempora sint omnis nihil eius commodi debitis
                    dignissimos placeat, nisi minima soluta necessitatibus voluptates
                    architecto. Consequatur consectetur dignissimos recusandae eos fug
                    it maiores architecto ad dolorum exercitationem, quasi eius eaque.
                    Ipsa repellat ab autem quis minima? Asperiores obcaecati animi quo.
                    Recusandae vitae nobis consequuntur dicta voluptatum architecto!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos explicabo tenetur doloremque quia expedita odio reiciendis
                    ea ad quam nulla, tempora sint omnis nihil eius commodi debitis
                    dignissimos placeat, nisi minima soluta necessitatibus voluptates
                    architecto. Consequatur consectetur dignissimos recusandae eos fug
                    it maiores architecto ad dolorum exercitationem, quasi eius eaque.
                    Ipsa repellat ab autem quis minima? Asperiores obcaecati animi quo.
                    Recusandae vitae nobis consequuntur dicta voluptatum architecto!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos explicabo tenetur doloremque quia expedita odio reiciendis
                    ea ad quam nulla, tempora sint omnis nihil eius commodi debitis
                    dignissimos placeat, nisi minima soluta necessitatibus voluptates
                    architecto. Consequatur consectetur dignissimos recusandae eos fug
                    it maiores architecto ad dolorum exercitationem, quasi eius eaque.
                    Ipsa repellat ab autem quis minima? Asperiores obcaecati animi quo.
                    Recusandae vitae nobis consequuntur dicta voluptatum architecto!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos explicabo tenetur doloremque quia expedita odio reiciendis
                    ea ad quam nulla, tempora sint omnis nihil eius commodi debitis
                    dignissimos placeat, nisi minima soluta necessitatibus voluptates
                    architecto. Consequatur consectetur dignissimos recusandae eos fug
                    it maiores architecto ad dolorum exercitationem, quasi eius eaque.
                    Ipsa repellat ab autem quis minima? Asperiores obcaecati animi quo.
                    Recusandae vitae nobis consequuntur dicta voluptatum architecto!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos explicabo tenetur doloremque quia expedita odio reiciendis
                    ea ad quam nulla, tempora sint omnis nihil eius commodi debitis
                    dignissimos placeat, nisi minima soluta necessitatibus voluptates
                    architecto. Consequatur consectetur dignissimos recusandae eos fug
                    it maiores architecto ad dolorum exercitationem, quasi eius eaque.
                    Ipsa repellat ab autem quis minima? Asperiores obcaecati animi quo.
                    Recusandae vitae nobis consequuntur dicta voluptatum architecto!
                </p>
            </div> */}
        </Fragment>
    );
};

export default RdsBanner;

import { FormEvent } from "react"
import { useIntl } from "react-intl"
import { Link } from "react-router-dom";
import classes from "./document.module.scss"
import { Button } from "../../components/button/button";

export const Verification = () => {
    const intl = useIntl()

    return (
        <div className={`${classes.container} container`}>
            <div className={`${classes['form-1']} form-1`} style={{ borderRadius: '2%' }}>
                <h5 className={`${classes.title}`}>{intl.formatMessage({ id: "secondpagetitle" })}</h5>
                <div className={`${classes.pdfcontainer}`}>
                    <div className="flex flex-column">
                        <span className="text-black">{intl.formatMessage({ id: "pdftitle" })}</span>
                        <span className="text-muted text-[0.9rem]">4.2 MB</span>
                    </div>
                    <span className={`${classes.view}`}>{intl.formatMessage({ id: "pdfview" })}</span>
                </div>
                <Button style={`${classes['download-document']}`} title={intl.formatMessage({ id: "download" })} />
            </div>
            <div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h4 className="text-[1rem] text-[#4f008c]">{intl.formatMessage({ id: "verifyanother" })}</h4>
                </Link>
            </div>
        </div>
    )
}